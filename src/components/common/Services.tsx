"use client";

import React, { JSX } from "react";
import { Code2, Laptop, Gauge, Accessibility, ShieldCheck, Layers } from "lucide-react";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  pulseDelay: string;      // Backing glowing pulse offsets
  scanDuration: string;    // Varied border ray loop speeds
  iconRotateClass: string; // Unique continuous spin loops
}

const services: ServiceItem[] = [
  {
    icon: Code2,
    title: "Next.js & React Development",
    description: "Building production-ready web applications with optimal structural rendering, using App Router, Server Components, and strict TypeScript patterns.",
    pulseDelay: "animate-[pulse_4s_ease-in-out_infinite]",
    scanDuration: "animate-[logo-shimmer_3s_linear_infinite]",
    iconRotateClass: "animate-[spin_8s_linear_infinite]",
  },
  {
    icon: Laptop,
    title: "Responsive UI/UX Engineering",
    description: "Translating sophisticated designs into fluid, mobile-first layouts using Tailwind CSS to guarantee seamless consistency across all devices.",
    pulseDelay: "animate-[pulse_4s_ease-in-out_infinite_600ms]",
    scanDuration: "animate-[logo-shimmer_4s_linear_infinite_500ms]",
    iconRotateClass: "animate-[pulse_3s_ease-in-out_infinite]",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Maximizing Core Web Vitals via aggressive asset optimization, strategic data fetching, dynamic code-splitting, and static caching techniques.",
    pulseDelay: "animate-[pulse_4s_ease-in-out_infinite_1200ms]",
    scanDuration: "animate-[logo-shimmer_3.5s_linear_infinite_200ms]",
    iconRotateClass: "animate-[bounce_4s_ease-in-out_infinite]",
  },
  {
    icon: Accessibility,
    title: "Web Accessibility (a11y)",
    description: "Ensuring semantic HTML composition, proper ARIA attributes, and keyboard-navigable architecture compliant with WCAG standards.",
    pulseDelay: "animate-[pulse_4s_ease-in-out_infinite_1800ms]",
    scanDuration: "animate-[logo-shimmer_4.5s_linear_infinite_800ms]",
    iconRotateClass: "animate-[pulse_4s_linear_infinite_200ms]",
  },
  {
    icon: ShieldCheck,
    title: "Clean Code & Component Design",
    description: "Architecting modular, highly reusable, and easily maintainable component libraries integrated with strict linting tools.",
    pulseDelay: "animate-[pulse_4s_ease-in-out_infinite_2400ms]",
    scanDuration: "animate-[logo-shimmer_3.2s_linear_infinite_400ms]",
    iconRotateClass: "animate-[spin_12s_linear_infinite_reverse]",
  },
  {
    icon: Layers,
    title: "API & State Integration",
    description: "Connecting complex server architectures with front-end global state managers, asynchronous data fetching hooks, and real-time streams.",
    pulseDelay: "animate-[pulse_4s_ease-in-out_infinite_3000ms]",
    scanDuration: "animate-[logo-shimmer_3.8s_linear_infinite_100ms]",
    iconRotateClass: "animate-[bounce_5s_ease-in-out_infinite_1000ms]",
  },
];

export function Services(): JSX.Element {
  return (
    <section id="services" className="relative bg-zinc-50 py-20 dark:bg-zinc-950 sm:py-32 overflow-hidden">
      {/* Ambient background accent canvas blast */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px] dark:bg-indigo-500/[0.02]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            What I Offer
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Premium Front-End Solutions Engineered to Scale
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            I bridge the gap between design and clean, deterministic engineering to bring high-performance user interfaces to life.
          </p>
        </div>

        {/* Services Layout Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700 shadow-xs hover:shadow-lg"
              >
                {/* 1. Continuous Laser Edge Scanner (Always Playing) */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent dark:via-blue-400/50 ${service.scanDuration}`} />

                {/* 2. Soft Ambient Background Glow Rings (Always Pulsing) */}
                <div className={`absolute -right-6 -top-6 -z-10 h-24 w-24 rounded-full bg-blue-600/[0.04] dark:bg-blue-400/[0.03] blur-xl ${service.pulseDelay}`} />
                
                {/* 3. Icon Box Wrapper with Continuous Custom Motion Track */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50 text-zinc-900 shadow-xs dark:from-zinc-900 dark:to-zinc-900/40 dark:text-zinc-50 transition-transform duration-500 group-hover:scale-105 group-hover:text-blue-500">
                  <div className={service.iconRotateClass}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Heading (Slight color transition indicator on loop overlap) */}
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>

                {/* Always-on Micro Indicator Code Syntax Tag */}
                <span className="absolute bottom-3 right-4 text-[10px] font-mono opacity-20 group-hover:opacity-50 transition-opacity duration-300 text-zinc-400 dark:text-zinc-500">
                  # 0{index + 1}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
