"use client";

import React, { JSX, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Blocks } from "lucide-react";

export function HeroBanner(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- Premium Canvas Data-Stream Particle Loop ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    // Initialize subtle floating background connection nodes
    const initParticles = () => {
      resizeCanvas();
      particles = [];
      const count = Math.min(Math.floor(canvas.width / 35), 40); // Scaling density safely
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4, // Slow creeping speed vectors
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    const drawLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Determine themes safely
      const isDark = document.documentElement.classList.contains("dark");
      ctx.fillStyle = isDark ? "rgba(59, 130, 246, 0.4)" : "rgba(37, 99, 235, 0.25)";
      ctx.strokeStyle = isDark ? "rgba(99, 102, 241, 0.04)" : "rgba(37, 99, 235, 0.05)";

      // Draw and update particle loops
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby items with neon digital path beams
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawLoop);
    };

    window.addEventListener("resize", resizeCanvas);
    initParticles();
    drawLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-zinc-950 sm:py-32 lg:pb-36 lg:pt-40">
      
      {/* Dynamic Interactive Background Nodes Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10 pointer-events-none opacity-80 dark:opacity-100" 
      />

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Radiant Slow Rotating Glow Accent Layer */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-[spin_25s_linear_infinite_paused] hover:animate-[spin_25s_linear_infinite]" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/12 rotate-30 bg-linear-to-tr from-blue-600 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content Layout */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 transition-transform duration-300 hover:scale-[1.02]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for freelance & full-time roles
            </div>

            {/* Title with Gradient Text Shimmer */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl max-w-2xl mx-auto lg:mx-0 leading-[1.1]">
              Building Premium <br />
              <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 animate-logo-shimmer py-1">
                Front-End Experiences
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0">
              Hi, I&apos;m <span className="font-semibold text-zinc-900 dark:text-zinc-100">Tanvir Ahmed</span>. 
              I specialize in crafting high-performance, accessible, and beautifully responsive web applications using React, Next.js, and TypeScript.
            </p>

            {/* Call To Actions */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="#projects"
                className="group inline-flex h-12 items-center justify-center rounded-xl bg-zinc-900 px-6 text-sm font-medium text-zinc-50 shadow transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-blue-500 dark:hover:text-white"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 bg-transparent px-6 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Tech Stack Badges with Staggered Multi-Stage CSS Pulses */}
            <div className="mt-12 border-t border-zinc-100 pt-8 dark:border-zinc-900 max-w-xl mx-auto lg:mx-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Core Expertise</p>
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-6 text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-1.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5">
                  <Blocks className="h-4 w-4 text-blue-500 animate-[pulse_3s_ease-in-out_infinite]" /> React / Next.js
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5">
                  <Cpu className="h-4 w-4 text-cyan-500 animate-[pulse_3s_ease-in-out_infinite_600ms]" /> TypeScript
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5">
                  <Terminal className="h-4 w-4 text-indigo-500 animate-[pulse_3s_ease-in-out_infinite_1200ms]" /> Tailwind CSS
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Visual Frame with Fluid Float Effect */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none animate-float">
            <div className="relative rounded-2xl border border-zinc-200 bg-white/40 p-2 shadow-2xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/40 group overflow-hidden">
              
              {/* Decorative Subtle Glowing Top Radar Ring inside the card container */}
              <div className="absolute top-0 right-0 h-px w-full bg-linear-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <div className="rounded-xl border border-zinc-200/60 bg-zinc-900 p-6 shadow-inner dark:border-zinc-800/60">
                {/* Mac Window Control Layout */}
                <div className="flex space-x-2 border-b border-zinc-800/80 pb-4">
                  <div className="h-3 w-3 rounded-full bg-rose-500/90 transition-transform duration-200 hover:scale-110" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/90 transition-transform duration-200 hover:scale-110" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/90 transition-transform duration-200 hover:scale-110" />
                </div>
                
                {/* IDE Core Visual Stack */}
                <div className="mt-4 font-mono text-xs leading-relaxed text-zinc-400">
                  <p className="text-zinc-500 animate-pulse">Portfolio.ts</p>
                  <p className="mt-2">
                    <span className="text-pink-500">const</span> developer = &#123;
                  </p>
                  <p className="ml-4 hover:text-zinc-200 transition-colors duration-150">
                    name: <span className="text-emerald-400">&apos;Tanvir Ahmed&apos;</span>,
                  </p>
                  <p className="ml-4 hover:text-zinc-200 transition-colors duration-150">
                    role: <span className="text-emerald-400">&apos;Front-End Engineer&apos;</span>,
                  </p>
                  <p className="ml-4 hover:text-zinc-200 transition-colors duration-150">
                    skills: [<span className="text-amber-400">&apos;Next.js&apos;</span>, <span className="text-amber-400">&apos;TypeScript&apos;</span>, <span className="text-amber-400">&apos;Tailwind&apos;</span>],
                  </p>
                  <p className="ml-4 hover:text-zinc-200 transition-colors duration-150">
                    focus: <span className="text-emerald-400">&apos;UX Optimization & Clean Code&apos;</span>
                  </p>
                  <p>&#125;;</p>
                  
                  <p className="mt-4 text-zinc-500">// Outputting high performance</p>
                  <p className="group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sky-400">developer</span>.<span className="text-yellow-400">buildResponsiveUI</span>();
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background Base Aurora Glow Field Vector */}
            <div className="absolute -right-6 -bottom-6 -z-10 h-72 w-72 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          </div>

        </div>
      </div>
    </section>
  );
}
