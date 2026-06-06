"use client";

import React, { JSX } from "react";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { Mail, MessageSquare, ArrowUpRight, Copy, Check } from "lucide-react";

export function Contact(): JSX.Element {
  const [copied, setCopied] = React.useState<boolean>(false);
  const emailAddress = "tanvirwebexpert@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="contact" className="relative bg-zinc-50 py-20 dark:bg-zinc-900/40 sm:py-32">
      {/* Top split layout accent border line */}
      <div className="absolute inset-x-0 top-0 h-px bg-zinc-200/60 dark:bg-zinc-800/60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Header Elements */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn delayClass="delay-100">
            <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Get In Touch
            </h2>
          </FadeIn>
          <FadeIn delayClass="delay-200">
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Let’s Start a Conversation
            </p>
          </FadeIn>
          <FadeIn delayClass="delay-300">
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Looking for a front-end specialist to optimize your interfaces, debug web builds, or turn designs into pristine code? Reach out directly through either platform below.
            </p>
          </FadeIn>
        </div>

        {/* Channels Card Layout Wrapper Grid */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          
          {/* Email Channel Card */}
          <FadeIn delayClass="delay-100" className="h-full">
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/[0.02] dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-400/30">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-blue-600 group-hover:text-white dark:bg-zinc-900 dark:text-zinc-50 dark:group-hover:bg-blue-500 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Email Me Directly
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  For formal project inquiries, technical specifications sheets, or corporate scheduling.
                </p>
                <p className="mt-4 font-mono text-sm font-medium text-zinc-900 dark:text-zinc-300 selection:bg-blue-500/20">
                  {emailAddress}
                </p>
              </div>

              {/* Email Control Buttons */}
              <div className="mt-8 flex items-center gap-3">
                <Link
                  href={`mailto:${emailAddress}`}
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Write Email
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
                
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-zinc-200 px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900 gap-1.5"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-zinc-400" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </FadeIn>

          {/* WhatsApp Channel Card */}
          <FadeIn delayClass="delay-200" className="h-full">
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/[0.02] dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-emerald-400/30">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-emerald-600 group-hover:text-white dark:bg-zinc-900 dark:text-zinc-50 dark:group-hover:bg-emerald-500 transition-colors">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Instant Chat Messaging
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  For fast project updates, real-time scope alignment discussions, or quick networking chats.
                </p>
                <p className="mt-4 font-mono text-sm font-medium text-zinc-900 dark:text-zinc-300 tracking-wide">
                  +88 01886658200
                </p>
              </div>

              {/* WhatsApp Action Button */}
              <div className="mt-8">
                <Link
                  href="https://wa.me/8801886658200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                  Open WhatsApp Chat
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
