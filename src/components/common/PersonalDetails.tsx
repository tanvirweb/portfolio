import Image from "next/image";
import { Mail, Phone, MapPin, Building2, ArrowUpRight } from "lucide-react";

const personalDetails = [
  {
    icon: Building2,
    label: "Company",
    value: "tanvir.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 01886658200",
    href: "tel:+8801886658200",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tanvirahmed1881@gmail.com",
    href: "mailto:tanvirahmed1881@gmail.com",
  },
  {
    icon: MapPin,
    label: "Primary Address",
    value: "H 131 Uttar Shikerpur, Sadar Pirojpur, Pirojpur 8500, Bangladesh",
  },
];

export default function PersonalDetails() {
  return (
    <section
      id="personal-details"
      className="border-t border-neutral-100 bg-white py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-500">
              Personal Details
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500">
            A little information about me and the best ways to get in touch.
          </p>
        </div>

        {/* Main card */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <div className="grid md:grid-cols-[240px_1fr]">
            {/* Profile */}
            <div className="border-b border-neutral-200 p-8 md:border-b-0 md:border-r">
              <div className="relative mx-auto aspect-square w-36 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                <Image
                  src="https://tanvirweb.github.io/portfolio/tanvir-dev.jpg"
                  alt="Md Tanvir Ahmed"
                  fill
                  priority
                  className="object-cover"
                  sizes="144px"
                />
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-neutral-500">
                    Available for work
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-900">
                  Md Tanvir Ahmed
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  Front-End Developer
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="divide-y divide-neutral-100">
              {/* Name */}
              <div className="flex items-start gap-4 p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
                  <span className="text-xs font-semibold text-neutral-500">
                    ID
                  </span>
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                    Full Name
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-900">
                    Md Tanvir Ahmed
                  </p>
                </div>
              </div>

              {/* Other details */}
              {personalDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
                      <Icon
                        size={15}
                        strokeWidth={1.7}
                        className="text-neutral-500"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                        {item.label}
                      </p>

                      <p className="mt-1 break-words text-sm font-medium text-neutral-900">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={14}
                        className="ml-auto mt-1 shrink-0 text-neutral-300 transition-colors group-hover:text-blue-500"
                      />
                    )}
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group block p-6 transition-colors hover:bg-neutral-50"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="p-6">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Small verification-style footer */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 text-center text-[11px] text-neutral-400 sm:flex-row sm:text-left">
          <span>Professional &amp; personal contact information</span>

          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Information verified
          </span>
        </div>
      </div>
    </section>
  );
}
