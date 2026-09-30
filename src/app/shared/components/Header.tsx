"use client";

import { useState } from "react";
import { navItems } from "../constant";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="container-dc flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-700 text-sm font-bold text-white shadow-sm">
            DC
          </div>

          <div className="hidden leading-tight dc:block">
            <div className="text-lg font-bold tracking-tight text-gray-900">
              DC
            </div>
            <div className="text-[10px] font-medium tracking-wide text-gray-500">
              Tagline
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 dc:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-teal-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 dc:block"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 dc:hidden"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition-transform ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition-transform ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-xl transition-all duration-300 dc:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-dc flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-gray-100 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-lg bg-teal-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};
