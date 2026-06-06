"use client";

import React, { JSX } from "react";
import Link from "next/link";
import { navItems, socialLinks } from "./Navbar/nav-config";
import { Globe, Link2, ArrowUp } from "lucide-react"; 

interface NavItem {
  href: string;
  label: string;
}

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-200/60 bg-white dark:border-zinc-900 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Top Segment: Brand, Nav & Socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-zinc-100 dark:border-zinc-900">
          
          {/* Logo / Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-mono text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                tanvir<span className="text-blue-600 dark:text-blue-400">.dev</span>
              </span>
            </Link>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 max-w-xs">
              Premium Front-End Solutions Engineered to Scale.
            </p>
          </div>

          {/* Quick Section Navigation Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons Stack */}
          <div className="flex items-center space-x-4 text-zinc-400 dark:text-zinc-500">
            <Link 
              href={socialLinks.github} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              {/* REPLACED: Now using Globe icon */}
              <Globe className="h-5 w-5" />
              <span className="sr-only">GitHub Portfolio</span>
            </Link>
            <Link 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              {/* REPLACED: Now using Link2 icon */}
              <Link2 className="h-5 w-5" />
              <span className="sr-only">LinkedIn Professional Profile</span>
            </Link>
          </div>
        </div>

        {/* Bottom Segment */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {currentYear} Tanvir Ahmed. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            aria-label="Scroll back to top of screen"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
