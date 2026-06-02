"use client";
import React, { JSX, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Card = {
  id: number;
  title: string;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                onClick={() => handleClick(card)}
                className={cn(
                  "relative overflow-hidden",
                  selected?.id === card.id
                    ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                    : lastSelected?.id === card.id
                    ? "z-40 rounded-xl h-full w-full"
                    : "rounded-xl h-full w-full"
                )}
                style={{ backgroundColor: "var(--ds-surface)" }}
                layoutId={`card-${card.id}`}
              >
                {selected?.id === card.id && <SelectedCard selected={selected} />}
                <ImageComponent card={card} />
              </motion.div>
            </TooltipTrigger>
            {selected?.id !== card.id && (
              <TooltipContent
                side="top"
                className="flex flex-col items-center p-3 text-center rounded-lg shadow-xl"
              >
                <span className="font-semibold text-sm mb-0.5 text-white dark:text-black">{card.title}</span>
                <span className="text-[10px] tracking-widest uppercase opacity-75 text-white dark:text-black">Click to expand</span>
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black/40 z-10 transition-all duration-300",
          selected?.id ? "pointer-events-auto backdrop-blur-xs" : "pointer-events-none backdrop-blur-none"
        )}
        animate={{ opacity: selected?.id ? 1 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-60">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-xs z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-70"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
