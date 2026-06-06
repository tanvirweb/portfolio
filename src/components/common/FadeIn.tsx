"use client";

import React, { useState, useEffect, useRef, JSX } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delayClass?: string;
}

export function FadeIn({ children, className = "", delayClass = "" }: FadeInProps): JSX.Element {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Once it animates, we don't need to observe it anymore
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animate-reveal ${isIntersecting ? "reveal-visible" : ""} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
