"use client";

import React, { useState, useEffect, JSX } from "react";

type PeekSide = "left" | "right" | "bottom";

interface AvatarState {
  visible: boolean;
  side: PeekSide;
  positionPercent: number; // Where along that edge it will appear
}

export function PeekabooAvatar(): JSX.Element {
  const [state, setState] = useState<AvatarState>({
    visible: false,
    side: "right",
    positionPercent: 50,
  });

  useEffect(() => {
    // Helper to generate a random number between a range
    const getRandomRange = (min: number, max: number) => 
      Math.floor(Math.random() * (max - min + 1)) + min;

    const triggerPeekaboo = () => {
      const sides: PeekSide[] = ["left", "right", "bottom"];
      const randomSide = sides[Math.floor(Math.random() * sides.length)];
      
      // Keep positions away from the absolute corners (between 20% and 80% of edge length)
      const randomPosition = getRandomRange(20, 80);

      // 1. Pop the avatar out
      setState({
        visible: true,
        side: randomSide,
        positionPercent: randomPosition,
      });

      // 2. Hide it safely after 3 seconds so it doesn't linger and distract
      setTimeout(() => {
        setState((prev) => ({ ...prev, visible: false }));
        
        // 3. Queue up the next appearance with a long, non-intrusive delay (15 to 25 seconds)
        const nextDelay = getRandomRange(15000, 25000);
        timeoutId = setTimeout(triggerPeekaboo, nextDelay);
      }, 3000);
    };

    // Initial appearance delay when the site first loads (5 seconds)
    let timeoutId = setTimeout(triggerPeekaboo, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Compute dynamic styling based on chosen boundary edge
  const getInlineStyles = () => {
    const styles: React.CSSProperties = {};
    
    if (state.side === "left" || state.side === "right") {
      styles.top = `${state.positionPercent}%`;
    } else {
      styles.left = `${state.positionPercent}%`;
    }
    
    return styles;
  };

  // Dynamic CSS classes managing hidden vs visible state offsets
  const getVisibilityClass = () => {
    if (!state.visible) {
      if (state.side === "left") return "-translate-x-full rotate-90";
      if (state.side === "right") return "translate-x-full -rotate-90";
      return "translate-y-full";
    }
    
    // Snug alignment when peeking out slightly
    if (state.side === "left") return "translate-x-0 rotate-90";
    if (state.side === "right") return "translate-x-0 -rotate-90";
    return "translate-y-0";
  };

  const sideOriginClasses = {
    left: "left-0 -translate-y-1/2 origin-left",
    right: "right-0 translate-y-1/2 origin-right",
    bottom: "bottom-0 -translate-x-1/2 origin-bottom",
  };

  return (
    <div
      style={getInlineStyles()}
      className={`fixed z-50 pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] select-none ${
        sideOriginClasses[state.side]
      } ${getVisibilityClass()}`}
    >
      {/* Avatar Graphic Container */}
      <div className="relative flex items-center justify-center p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl w-14 h-14 sm:w-16 sm:h-16">
        
        {/* Animated Peeking Character / SVG */}
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full text-blue-600 dark:text-blue-400 animate-pulse"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simple Cute Robot/Developer Character */}
          <rect x="12" y="18" width="40" height="34" rx="12" fill="currentColor" opacity="0.15" />
          <rect x="12" y="18" width="40" height="34" rx="12" stroke="currentColor" strokeWidth="3" />
          {/* Eyes looking down or toward the center screen layout */}
          <circle cx="26" cy="32" r="3.5" fill="currentColor" />
          <circle cx="38" cy="32" r="3.5" fill="currentColor" />
          {/* Blushing detail */}
          <ellipse cx="20" cy="36" rx="2" ry="1" fill="#ef4444" opacity="0.5" />
          <ellipse cx="44" cy="36" rx="2" ry="1" fill="#ef4444" opacity="0.5" />
          {/* Smile line */}
          <path d="M29 39C30 40 32 40.5 33.5 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Antenna */}
          <path d="M32 18V10M32 10C33.6569 10 35 8.65685 35 7C35 5.34315 33.6569 4 32 4C30.3431 4 29 5.34315 29 7C29 8.65685 30.3431 10 32 10Z" stroke="currentColor" strokeWidth="2" />
        </svg>

        {/* Small decorative indicator bubble */}
        <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
      </div>
    </div>
  );
}
