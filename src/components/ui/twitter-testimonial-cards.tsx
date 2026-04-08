"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  avatar?: string;
  username: string;
  handle: string;
  content: string;
  date: string;
  verified?: boolean;
  likes?: number;
  retweets?: number;
  tweetUrl?: string;
  className?: string;
  isActive?: boolean;
}

export function TestimonialCard({
  avatar,
  username,
  handle,
  content,
  date,
  verified = true,
  likes = 0,
  retweets = 0,
  tweetUrl,
  className,
  isActive,
}: TestimonialCardProps) {
  const [tapCount, setTapCount] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    if (!tweetUrl) return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) {
      if (tapCount === 0) {
        e.preventDefault();
        setTapCount(1);
      } else {
        setTapCount(0);
      }
    }
  };

  const Component = tweetUrl ? "a" : "div";

  return (
    <Component
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "[grid-area:stack] w-full max-w-sm rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
        "transition-all duration-300 ease-out",
        isActive && "ring-2 ring-accent ring-offset-2",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {avatar ? (
            <img src={avatar} alt={username} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
              {username[0]}
            </div>
          )}
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm text-foreground">{username}</span>
              {verified && (
                <svg className="w-4 h-4 text-[#1D9BF0]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91-1.01-1-2.52-1.27-3.91-.81C14.67 2.88 13.43 2 12 2s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81-1 1.01-1.27 2.52-.81 3.91C2.88 9.33 2 10.57 2 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91 1.01 1 2.52 1.27 3.91.81C9.33 21.12 10.57 22 12 22s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81 1-1.01 1.27-2.52.81-3.91C21.12 14.67 22 13.43 22 12zm-6.16-1.96l-4.5 4.5a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72 3.97-3.97a.75.75 0 111.06 1.06z" />
                </svg>
              )}
            </div>
            <span className="text-xs text-muted">{handle}</span>
          </div>
        </div>
        {/* X/Twitter logo */}
        <svg className="w-5 h-5 text-foreground/20 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      {/* Content */}
      <p className="text-sm text-foreground leading-relaxed line-clamp-4 mb-3">{content}</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-muted">
        <span>{date}</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            {retweets}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            {likes}
          </span>
        </div>
      </div>
    </Component>
  );
}

interface TestimonialsStackProps {
  cards?: TestimonialCardProps[];
}

export function TestimonialsStack({ cards }: TestimonialsStackProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const defaultCards: TestimonialCardProps[] = cards || [];

  const getCardStyle = (index: number) => {
    const total = defaultCards.length;
    const isHoveredCard = hovered === index;
    const isCardBehindHovered = hovered !== null && index > hovered;

    const baseTranslateX = index * 12;
    const baseTranslateY = index * 8;
    const pushExtra = isCardBehindHovered ? 18 : 0;

    return {
      transform: `skewY(-8deg) translateX(${baseTranslateX + pushExtra}px) translateY(${baseTranslateY + pushExtra}px)`,
      zIndex: isHoveredCard ? total + 1 : total - index,
      filter: index === 0 || isHoveredCard ? "none" : `grayscale(${Math.min(100, index * 40)}%)`,
      opacity: index === 0 || isHoveredCard ? 1 : 1 - index * 0.08,
    };
  };

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center relative h-[340px]">
      {defaultCards.map((card, i) => (
        <div
          key={i}
          style={getCardStyle(i)}
          className="transition-all duration-300 ease-out"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <TestimonialCard {...card} isActive={hovered === i} />
        </div>
      ))}
    </div>
  );
}
