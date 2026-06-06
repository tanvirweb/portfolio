"use client";

import React, { useState, useRef, useEffect, JSX } from "react";
import Link from "next/link";

interface Particle {
  id: number;
  x: number;
  y: number;
  alpha: number;
  angle?: number;
  radius?: number;
  speed?: number;
  isCustom?: boolean;
  velocity?: { x: number; y: number };
}

export function AnimatedLogo(): JSX.Element {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // --- Initialize Loop Particles ---
  useEffect(() => {
    // Generate 6 persistent backdrop loop particles that orbit the ".dev" text area
    const initialParticles: Particle[] = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      x: 90, // Position centered roughly over the text extension area
      y: 20,
      alpha: 0.4 + Math.random() * 0.4,
      angle: (i * (Math.PI * 2)) / 6, // Evenly spaced distribution
      radius: 12 + Math.random() * 10, // Orbit path radius
      speed: 0.02 + Math.random() * 0.02,
      isCustom: false
    }));
    setParticles(initialParticles);
  }, []);

  // --- Real-time Particle Spawning on Mouse Move (No text movement) ---
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = logoRef.current;
    if (!el) return;
    setIsHovered(true);

    const rect = el.getBoundingClientRect();

    // Dynamic microburst trail particles spawned on mouse movement
    if (Math.random() < 0.3) {
      const spawnX = e.clientX - rect.left;
      const spawnY = e.clientY - rect.top;
      
      const burstParticle: Particle = {
        id: Math.random(),
        x: spawnX,
        y: spawnY,
        alpha: 1,
        isCustom: true,
        velocity: {
          x: (Math.random() - 0.5) * 1.5,
          y: (Math.random() - 0.5) * 1.5 - 0.5,
        }
      };
      setParticles((prev) => [...prev, burstParticle]);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // --- Combined Continuous Core Physics Engine ---
  useEffect(() => {
    const updateFrame = () => {
      setParticles((prevParticles) =>
        prevParticles
          .map((p) => {
            if (p.isCustom && p.velocity) {
              // Mouse burst handling logic: float outward and decay alpha smoothly
              return {
                ...p,
                x: p.x + p.velocity.x,
                y: p.y + p.velocity.y,
                alpha: p.alpha - 0.03,
              };
            } else if (p.angle !== undefined && p.radius !== undefined && p.speed !== undefined) {
              // Ambient loop handling logic: advance persistent particle orbital math path
              const nextAngle = p.angle + p.speed;
              // Base coordinates offset centered roughly around ".dev" coordinates position
              const baseCenterX = 82; 
              const baseCenterY = 22;
              return {
                ...p,
                angle: nextAngle,
                x: baseCenterX + Math.cos(nextAngle) * p.radius,
                y: baseCenterY + Math.sin(nextAngle) * p.radius,
              };
            }
            return p;
          })
          .filter((p) => !p.isCustom || p.alpha > 0) // Keep all ambient loops, prune dead mouse bursts
      );
    };

    const frameId = requestAnimationFrame(function loop() {
      updateFrame();
      requestAnimationFrame(loop);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <Link
      href="/"
      ref={logoRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center group select-none py-2 px-3 rounded-xl"
    >
      {/* Dynamic Hardware-Accelerated Particle Canvas Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {particles.map((p) => (
          <span
            key={p.id}
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              opacity: p.alpha,
              transform: "translate(-50%, -50%)",
            }}
            className={`absolute rounded-full pointer-events-none transition-opacity duration-100 ${
              p.isCustom 
                ? "h-1 w-1 bg-indigo-400 shadow-[0_0_6px_#6366f1]" 
                : "h-0.75 w-0.75 bg-blue-500/70 shadow-[0_0_4px_#3b82f6]"
            }`}
          />
        ))}
      </div>

      {/* Core Branded Typographic System (Completely locked in place) */}
      <span className="font-mono text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        tanvir
        <span className="inline-block bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 animate-logo-shimmer ml-0.5 relative">
          .dev
          {/* Neon Horizontal Underline Accent Scan Line */}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400 origin-left transition-transform duration-500 ease-out shadow-[0_1px_6px_rgba(59,130,246,0.6)] ${
            isHovered ? "scale-x-100" : "scale-x-40 opacity-50"
          }`} />
        </span>
      </span>
    </Link>
  );
}
