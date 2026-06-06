"use client";

import React, { JSX } from "react";
import Link from "next/link";
import { Briefcase, Calendar, ChevronRight, ExternalLink } from "lucide-react";

interface Position {
  role: string;
  company: string;
  companyUrl?: string; // Added optional link support
  period: string;
  description: string[];
  skills: string[];
}

const experiences: Position[] = [
  {
    role: "Senior Front-End Engineer",
    company: "Amd Creatives",
    companyUrl: "https://amdcreatives.com/", // Integrated the link
    period: "2025 - Present",
    description: [
      "Architecting modular component libraries and managing optimized layout architectures across multiple Next.js applications.",
      "Spearheading responsive web structures and interface integrations utilizing server-side optimization techniques.",
      "Collaborating closely with product teams to enforce accessibility guidelines (WCAG) and streamline developer workflows."
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "A11y"]
  },
  {
    role: "Front-End Developer",
    company: "Network Directory Project",
    period: "2024 - 2025",
    description: [
      "Dedicated over thirty hours to building, refactoring, and optimizing complex form inputs and interactive UI layouts.",
      "Resolved runtime configuration, compiler, and strict code formatting errors across complex type-safe files.",
      "Implemented smooth filtering pipelines and managed robust, predictable application states."
    ],
    skills: ["React", "JavaScript", "Context API", "CSS Modules", "ESLint"]
  },
  {
    role: "UI Developer Intern",
    company: "Digital Studio Corp",
    period: "2023 - 2024",
    description: [
      "Translated strict static design frames into highly pixel-perfect, responsive web layouts using semantic HTML markup.",
      "Optimized assets and asset loading chains to improve baseline client-side performance scoring across mobile browsers."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Git", "Responsive Design"]
  }
];

export function Experience(): JSX.Element {
  return (
    <section id="experience" className="relative bg-zinc-50 py-20 dark:bg-zinc-900/40 sm:py-32">
      {/* Visual top border split line */}
      <div className="absolute inset-x-0 top-0 h-px bg-zinc-200/60 dark:bg-zinc-800/60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Career Timeline
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Professional Experience
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            A history of building high-performance web products, writing scalable markup, and optimizing front-end frameworks.
          </p>
        </div>

        {/* Timeline Component Layout */}
        <div className="relative mx-auto max-w-3xl border-l border-zinc-200 dark:border-zinc-800 pl-6 sm:pl-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative mb-16 last:mb-0 group"
            >
              {/* Timeline Indicator Node Pin */}
              <div className="absolute -left-7.75 sm:-left-9.75 top-1.5 flex h-4 w-4 items-center justify-between rounded-full border-2 border-zinc-200 bg-white transition-colors duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 dark:border-zinc-800 dark:bg-zinc-950 dark:group-hover:border-blue-400 dark:group-hover:bg-blue-400" />

              {/* Header Title Information block */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {exp.role}
                  </h3>
                  
                  {/* Dynamic Company Link Integration */}
                  {exp.companyUrl ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group/link underline-offset-4 hover:underline"
                    >
                      <Briefcase className="mr-1.5 h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
                      {exp.company}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-60 transition-transform group-hover/link:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <p className="inline-flex items-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      <Briefcase className="mr-1.5 h-3.5 w-3.5" />
                      {exp.company}
                    </p>
                  )}
                </div>

                {/* Calendar Date Badge */}
                <span className="inline-flex max-w-fit items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  <Calendar className="mr-1.5 h-3.5 w-3.5" />
                  {exp.period}
                </span>
              </div>

              {/* Responsibilities Point List */}
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {exp.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start">
                    <ChevronRight className="mr-2 h-4 w-4 mt-0.5 shrink-0 text-zinc-400 dark:text-zinc-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technical Stack Pills Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-white px-2.5 py-0.5 text-xs font-medium text-zinc-700 border border-zinc-200 dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
