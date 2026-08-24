"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { brand, nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-24">
          <a
            href="#top"
            className={cn(
              "font-display text-xl tracking-wide transition-colors md:text-2xl",
              scrolled ? "text-charcoal" : "text-ivory"
            )}
          >
            {brand.name}
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-body text-[13px] uppercase tracking-[0.14em] transition-colors hover:opacity-70",
                  scrolled ? "text-charcoal" : "text-ivory"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              variant={scrolled ? "primary" : "outline-light"}
              size="sm"
              asChild
            >
              <a href="#booking">Book Consultation</a>
            </Button>
          </div>
        </nav>
      </Container>

      {/*
        Mobile keeps every destination on screen rather than hiding them behind
        a hamburger. Six labels in one row overflow a 390px viewport, so they
        wrap into a three-up grid — all six stay visible and legible without
        anyone having to scroll the bar sideways.
      */}
      <div
        className={cn(
          "border-t transition-colors duration-500 lg:hidden",
          scrolled ? "border-charcoal/10" : "border-ivory/15"
        )}
      >
        <Container>
          <div className="grid grid-cols-3 gap-x-3 gap-y-2 py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-center font-body text-[11px] uppercase tracking-[0.1em] transition-colors",
                  scrolled ? "text-charcoal/80" : "text-ivory/85"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
