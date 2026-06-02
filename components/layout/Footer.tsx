"use client";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { profile } from "@/data";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const SOCIAL = [
  { Icon: FaGithub,      href: profile.github,              label: "GitHub"    },
  { Icon: FaLinkedinIn,  href: profile.linkedin,            label: "LinkedIn"  },
  { Icon: FaInstagram,   href: profile.instagram,           label: "Instagram" },
  { Icon: MdOutlineEmail, href: `mailto:${profile.email}`, label: "Email"     },
];

export function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer
      className="w-full px-5 md:px-12 py-5 flex items-center justify-between"
      style={{
        backgroundColor: "var(--ds-bg)",
      }}
    >
      <p
        className="text-[13px]"
        style={{ color: "var(--ds-text-tertiary)", fontFamily: "var(--font-elms)" }}
      >
        © 2026 /{" "}
        <span style={{ color: "var(--ds-text-secondary)" }}>Navin Raj</span>
      </p>

      <div className="flex items-center gap-3">
        {SOCIAL.map(({ Icon, href, label }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 p-0 hover:bg-neutral-800/10 dark:hover:bg-neutral-100/10 pointer-events-auto transition-colors"
                style={{ color: "var(--ds-text-secondary)" }}
                onClick={() => handleClick(href)}
                aria-label={label}
              >
                <Icon size={19} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              {label}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </footer>
  );
}


