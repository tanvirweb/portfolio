"use client";

import React, { JSX } from "react";
import Link from "next/link";
import { ExternalLink, FolderGit2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Architecture Platform",
    description: "A high-performance storefront engine built with Next.js App Router, featuring incremental static regeneration (ISR), secure checkout pipelines, and a customized responsive dashboard optimized for low latency.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    githubUrl: "https://github.com/tanvirahmed/ecommerce-core",
    liveUrl: "https://ecommerce-demo.tanvirahmed.dev",
    featured: true,
  },
  {
    title: "Dynamic Network Directory",
    description: "An interactive workspace component directory built using React layout optimizations. Implements complex structural layout fields, fluid filtering mechanics, and custom state hooks spanning over 30 hours of specialized component refactoring.",
    tags: ["React", "JavaScript", "Context API", "Tailwind CSS"],
    githubUrl: "https://github.com/tanvirahmed/network-directory",
    featured: true,
  },
  {
    title: "SaaS Analytics Dashboard Engine",
    description: "A secure, modern workspace tracking analytical data structures in real-time. Packed with custom accessible layouts, theme-adaptive charts, and keyboard-navigable tables compliant with strict WCAG metrics.",
    tags: ["Next.js", "TypeScript", "Recharts", "Shadcn UI"],
    githubUrl: "https://github.com/tanvirahmed/analytics-dashboard",
    liveUrl: "https://analytics.tanvirahmed.dev",
    featured: false,
  },
];

export function Projects(): JSX.Element {
  return (
    <section id="projects" className="relative bg-white py-20 dark:bg-zinc-950 sm:py-32">
      {/* Structural Accent Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-zinc-200/60 dark:bg-zinc-800/60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-100 pb-8 dark:border-zinc-900">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Selected Works
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Case Studies & Digital Deployments
            </p>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
            A curation of production-ready interfaces built to demonstrate clean engineering logic, semantic markup accessibility, and layout performance.
          </p>
        </div>

        {/* Project Layout Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`flex flex-col justify-between overflow-hidden rounded-2xl border bg-zinc-50/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 dark:bg-zinc-900/30 dark:hover:bg-zinc-900/80 dark:hover:shadow-none ${
                project.featured
                  ? "border-zinc-200/80 dark:border-zinc-800/80 ring-1 ring-zinc-200/30 dark:ring-zinc-800/30"
                  : "border-zinc-200/40 dark:border-zinc-800/40"
              }`}
            >
              <div>
                {/* Card Header Top Row */}
                <div className="flex items-center justify-between text-zinc-400">
                  <FolderGit2 className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                  
                  {/* External Links */}
                  <div className="flex items-center space-x-3">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      <FolderGit2 className="h-5 w-5" />
                      <span className="sr-only">GitHub Repository</span>
                    </Link>
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Content Elements */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technical Stack Tags Footer */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 border border-zinc-200/50 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
