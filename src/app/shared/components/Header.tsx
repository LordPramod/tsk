"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "../constant";
import { cn } from "../utils";
import { ButtonLink } from "./Button";
import { Logo } from "./Logo";

const MOBILE_NAV_ID = "mobile-navigation";

const isActivePath = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export const Header = () => {
  const pathname = usePathname();
  const [menuOpenedOn, setMenuOpenedOn] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isMenuOpen = menuOpenedOn === pathname;

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpenedOn(null);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setMenuOpenedOn(null);
  const toggleMenu = () => setMenuOpenedOn(isMenuOpen ? null : pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/80 backdrop-blur-md">
      <div className="container-dc flex h-18 items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          onClick={closeMenu}
          className="justify-self-start rounded-chip"
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden dc:block">
          <ul className="flex items-center gap-5 lg:gap-8">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-teal after:transition-opacity",
                      isActive ? "text-teal-dark after:opacity-100" : "text-muted after:opacity-0 hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden justify-self-end dc:block">
          <ButtonLink href="/contact">Contact Us</ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_NAV_ID}
          className="grid size-11 place-items-center rounded-lg text-ink transition-colors hover:bg-chip-teal dc:hidden"
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div
        id={MOBILE_NAV_ID}
        className={cn(
          "absolute inset-x-0 top-full grid border-b border-line bg-white shadow-lift transition-[grid-template-rows,opacity,visibility] duration-300 ease-out motion-reduce:transition-none dc:hidden",
          isMenuOpen ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="container-dc pt-2 pb-5">
            <ul>
              {navItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex py-3.5 text-[15px] font-medium transition-colors",
                        isActive ? "text-teal-dark" : "text-ink hover:text-teal-dark",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ButtonLink href="/contact" onClick={closeMenu} className="mt-5 w-full">
              Contact Us
            </ButtonLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
