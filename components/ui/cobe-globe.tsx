"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface Marker {
  id: string
  location: [number, number]
  label: string
}

interface Arc {
  id: string
  from: [number, number]
  to: [number, number]
  label?: string
}

interface GlobeProps {
  markers?: Marker[]
  arcs?: Arc[]
  className?: string
  markerColor?: [number, number, number]
  baseColor?: [number, number, number]
  arcColor?: [number, number, number]
  glowColor?: [number, number, number]
  dark?: number
  mapBrightness?: number
  markerSize?: number
  markerElevation?: number
  arcWidth?: number
  arcHeight?: number
  speed?: number
  theta?: number
  diffuse?: number
  mapSamples?: number
}

// ── Projection helpers — exact mirror of cobe v2 internals ────────────────

const GLOBE_R = 0.8  // cobe renders globe at radius 0.8 in clip space

/** Matches cobe's U([lat, lon]) function exactly. */
function cobeLatLon(lat: number, lon: number): [number, number, number] {
  const latR = (lat * Math.PI) / 180
  const lonR = (lon * Math.PI) / 180 - Math.PI   // cobe subtracts π
  const cosLat = Math.cos(latR)
  return [
    -cosLat * Math.cos(lonR),   // same sign as cobe: -o * cos(a)
    Math.sin(latR),
    cosLat * Math.sin(lonR),    // cobe: o * sin(a)
  ]
}

/**
 * Matches cobe's O(point) function — projects a scaled 3D point to a 0-1
 * screen fraction then converts to canvas pixels.  Assumes square canvas
 * (width === height) with scale=1 and no offset.
 */
function cobeProject(
  t: [number, number, number],
  phi: number,
  theta: number,
  canvasSize: number,
): { x: number; y: number; visible: boolean } {
  const [tx, ty, tz] = t
  const cp = Math.cos(phi), sp = Math.sin(phi)
  const ct = Math.cos(theta), st = Math.sin(theta)

  const c = cp * tx + sp * tz                          // screen-x component
  const s = sp * st * tx + ct * ty - cp * st * tz      // screen-y component
  const z = -sp * ct * tx + st * ty + cp * ct * tz     // depth (positive = facing viewer)

  return {
    x: ((c + 1) / 2) * canvasSize,
    y: ((-s + 1) / 2) * canvasSize,
    visible: z >= 0,
  }
}

function projectMarker(
  lat: number, lon: number,
  phi: number, theta: number,
  canvasSize: number,
  markerElevation: number,
) {
  const t = cobeLatLon(lat, lon)
  const r = GLOBE_R + markerElevation
  return cobeProject([t[0]*r, t[1]*r, t[2]*r], phi, theta, canvasSize)
}

/** Mid-point of an arc — matches cobe's X() function (normalised average scaled by arc-height). */
function projectArcMid(
  from: [number, number], to: [number, number],
  phi: number, theta: number,
  canvasSize: number,
  arcHeight: number,
  markerElevation: number,
) {
  const f = cobeLatLon(from[0], from[1])
  const t2 = cobeLatLon(to[0], to[1])
  const ax = f[0]+t2[0], ay = f[1]+t2[1], az = f[2]+t2[2]
  const len = Math.sqrt(ax*ax + ay*ay + az*az)
  if (len < 0.001) return null
  // cobe places arc-label at: 0.25*(R+elev) + 0.5*(R+arcH+elev) / len
  const scale = 0.25*(GLOBE_R+markerElevation) + 0.5*(GLOBE_R+arcHeight+markerElevation)/len
  return cobeProject([ax*scale, ay*scale, az*scale], phi, theta, canvasSize)
}

// ── Component ──────────────────────────────────────────────────────────────

export function Globe({
  markers = [],
  arcs = [],
  className = "",
  markerColor = [0.3, 0.45, 0.85],
  baseColor = [1, 1, 1],
  arcColor = [0.3, 0.45, 0.85],
  glowColor = [0.94, 0.93, 0.91],
  dark = 0,
  mapBrightness = 10,
  markerSize = 0.05,
  markerElevation = 0.01,
  arcWidth = 1.5,
  arcHeight = 0.3,
  speed = 0.003,
  theta = 0.2,
  diffuse = 1.5,
  mapSamples = 16000,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Interaction state
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const lastPointer = useRef<{ x: number; y: number; t: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const velocity = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  // Label DOM refs — mutated directly in RAF, no React re-renders
  const markerElsRef = useRef<Map<string, HTMLDivElement | null>>(new Map())
  const arcLabelElsRef = useRef<Map<string, HTMLDivElement | null>>(new Map())

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!pointerInteracting.current) return
    dragOffset.current = {
      phi: (e.clientX - pointerInteracting.current.x) / 300,
      theta: (e.clientY - pointerInteracting.current.y) / 1000,
    }
    const now = Date.now()
    if (lastPointer.current) {
      const dt = Math.max(now - lastPointer.current.t, 1)
      const maxV = 0.15
      velocity.current = {
        phi: Math.max(-maxV, Math.min(maxV, ((e.clientX - lastPointer.current.x) / dt) * 0.3)),
        theta: Math.max(-maxV, Math.min(maxV, ((e.clientY - lastPointer.current.y) / dt) * 0.08)),
      }
    }
    lastPointer.current = { x: e.clientX, y: e.clientY, t: now }
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
      lastPointer.current = null
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animId: number
    let phi = 0

    function init() {
      const w = canvas.offsetWidth
      if (w === 0 || globe) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: w,
        height: w,
        phi: 0,
        theta,
        dark,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markers: markers.map((m) => ({ location: m.location, size: markerSize })),
        arcs: arcs.map((a) => ({ from: a.from, to: a.to })),
        arcColor,
        arcWidth,
        arcHeight,
        markerElevation,
        opacity: 0.7,
      })

      function animate() {
        if (!isPausedRef.current) {
          phi += speed
          if (Math.abs(velocity.current.phi) > 0.0001 || Math.abs(velocity.current.theta) > 0.0001) {
            phiOffsetRef.current += velocity.current.phi
            thetaOffsetRef.current += velocity.current.theta
            velocity.current.phi *= 0.95
            velocity.current.theta *= 0.95
          }
          const tMin = -0.4, tMax = 0.4
          if (thetaOffsetRef.current < tMin) thetaOffsetRef.current += (tMin - thetaOffsetRef.current) * 0.1
          else if (thetaOffsetRef.current > tMax) thetaOffsetRef.current += (tMax - thetaOffsetRef.current) * 0.1
        }

        const cPhi = phi + phiOffsetRef.current + dragOffset.current.phi
        const cTheta = theta + thetaOffsetRef.current + dragOffset.current.theta

        globe!.update({ phi: cPhi, theta: cTheta })

        // Update city label positions (exact cobe projection)
        const cw = canvas.offsetWidth
        for (const m of markers) {
          const el = markerElsRef.current.get(m.id)
          if (!el) continue
          const pos = projectMarker(m.location[0], m.location[1], cPhi, cTheta, cw, markerElevation)
          el.style.left = `${pos.x}px`
          el.style.top = `${pos.y}px`
          el.style.opacity = pos.visible ? "1" : "0"
        }

        // Update arc label positions (exact cobe arc-midpoint projection)
        for (const a of arcs) {
          if (!a.label) continue
          const el = arcLabelElsRef.current.get(a.id)
          if (!el) continue
          const pos = projectArcMid(a.from, a.to, cPhi, cTheta, cw, arcHeight, markerElevation)
          if (!pos) continue
          el.style.left = `${pos.x}px`
          el.style.top = `${pos.y}px`
          el.style.opacity = pos.visible ? "1" : "0"
        }

        animId = requestAnimationFrame(animate)
      }

      setTimeout(() => canvas && (canvas.style.opacity = "1"))
      animate()
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) { ro.disconnect(); init() }
      })
      ro.observe(canvas)
    }

    return () => {
      cancelAnimationFrame(animId)
      globe?.destroy()
    }
  }, [markers, arcs, markerColor, baseColor, arcColor, glowColor, dark, mapBrightness, markerSize, markerElevation, arcWidth, arcHeight, speed, theta, diffuse, mapSamples])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />

      {/* City labels — JS-projected each RAF tick */}
      {markers.map((m) => (
        <div
          key={m.id}
          ref={(el) => { markerElsRef.current.set(m.id, el) }}
          style={{
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 0.4s ease",
            transform: "translate(-50%, calc(-100% - 10px))",
            padding: "3px 7px",
            background: "#1a1a2e",
            color: "#fff",
            fontFamily: "ui-monospace, monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            borderRadius: "2px",
          }}
        >
          {m.label}
          <span style={{
            position: "absolute", top: "100%", left: "50%",
            transform: "translate3d(-50%,-1px,0)",
            border: "4px solid transparent",
            borderTopColor: "#1a1a2e",
          }} />
        </div>
      ))}

      {/* Arc route labels — JS-projected each RAF tick */}
      {arcs.filter((a) => a.label).map((a) => (
        <div
          key={a.id}
          ref={(el) => { arcLabelElsRef.current.set(a.id, el) }}
          style={{
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 0.4s ease",
            transform: "translate(-50%, calc(-100% - 10px))",
            padding: "3px 7px",
            background: "rgba(255,255,255,0.92)",
            color: "#1a1a2e",
            fontFamily: "ui-monospace, monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            borderRadius: "2px",
            boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
          }}
        >
          {a.label}
          <span style={{
            position: "absolute", top: "100%", left: "50%",
            transform: "translate3d(-50%,-1px,0)",
            border: "4px solid transparent",
            borderTopColor: "rgba(255,255,255,0.92)",
          }} />
        </div>
      ))}
    </div>
  )
}
