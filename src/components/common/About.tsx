"use client";

import React, { JSX } from "react";
import { FadeIn } from "./FadeIn";
import { User, Code2, Terminal, Cpu, Sparkles, GraduationCap } from "lucide-react";

export function About(): JSX.Element {
  return (
    <section id="about" className="relative bg-white py-20 dark:bg-zinc-950 sm:py-32">
      {/* Visual Section Divider Split Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-zinc-200/60 dark:bg-zinc-800/60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography Narratives */}
          <div className="lg:col-span-7">
            <FadeIn delayClass="delay-100">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <User className="h-3.5 w-3.5" />
                About Me
              </div>
            </FadeIn>

            <FadeIn delayClass="delay-200">
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Bridging Sophisticated Systems with Intuitive User Interfaces
              </h2>
            </FadeIn>

            <FadeIn delayClass="delay-300">
              <div className="mt-6 space-y-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  I am a passionate front-end developer focused on crafting clean, deterministic, and highly responsive user interfaces. My journey involves translating intricate layout challenges into semantic, pixel-perfect digital solutions that look stunning and perform flawlessly across devices.
                </p>
                <p>
                  Specializing in the modern JavaScript ecosystem, I thrive within **React**, **Next.js**, and **TypeScript**. I place great emphasis on client-side state management, efficient component architecture, and absolute semantic markup optimization to fulfill modern accessibility standard parameters.
                </p>
                <p>
                  Whether managing strict compile targets, troubleshooting build configurations, or profiling Core Web Vitals to elevate performance metrics, I build with a dedication to engineering maintainable codebases that scale.
                </p>
              </div>
            </FadeIn>

            {/* Quick Core Strengths Checklist */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FadeIn delayClass="delay-100" className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-900 text-blue-500">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Pixel-Perfect Layouts</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Fluent deployment of utility frameworks like Tailwind CSS.</p>
                </div>
              </FadeIn>

              <FadeIn delayClass="delay-200" className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-900 text-indigo-500">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Continuous Evolution</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Always staying adaptive with the latest web standards and features.</p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Visual Skill Matrix Card Container */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <FadeIn delayClass="delay-300">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Technical Arsenal
                </h3>
                
                {/* Skill Stack categories grouped sequentially */}
                <div className="mt-6 space-y-6">
                  {/* Category 1 */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      <Code2 className="h-4 w-4 text-blue-500" />
                      <span>Core Frameworks</span>
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {["Next.js", "React.js", "JavaScript (ES6+)"].map((tech) => (
                        <span key={tech} className="rounded-lg bg-white px-3 py-1 text-xs font-medium border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      <Cpu className="h-4 w-4 text-cyan-500" />
                      <span>Architecture & Flow</span>
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {["TypeScript", "Zustand / Redux", "RESTful APIs"].map((tech) => (
                        <span key={tech} className="rounded-lg bg-white px-3 py-1 text-xs font-medium border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      <Terminal className="h-4 w-4 text-indigo-500" />
                      <span>Styling & Tooling</span>
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {["Tailwind CSS", "Git / GitHub", "ESLint / Configs"].map((tech) => (
                        <span key={tech} className="rounded-lg bg-white px-3 py-1 text-xs font-medium border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Extra Stats Footnote banner */}
                <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800 flex items-center justify-between text-center">
                  <div>
                    <span className="block text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">3+</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">Years Experience</span>
                  </div>
                  <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800" />
                  <div>
                    <span className="block text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">15+</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">Projects Shipped</span>
                  </div>
                  <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800" />
                  <div>
                    <span className="block text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">30+</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">Hours Component Refactoring</span>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
