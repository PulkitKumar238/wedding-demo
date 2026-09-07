"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { brand, nav } from "@/data/site";
import { img } from "@/data/images";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /*
    The bar is transparent with ivory text until you scroll, which reads over
    the home page's dark hero. Every other route opens on ivory, where ivory
    text is invisible — so off the home page it starts solid.
  */
  const solid = scrolled || pathname !== "/";

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
        solid
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-24">
          {/*
            The bar is too short to set the stacked lockup, so the header takes
            the mark on its own with the name beside it. Both cuts are rendered
            and cross-faded rather than swapping `src` on scroll — swapping
            would re-request the file and blink the mark out mid-transition.
          */}
          <Link href="/#top" className="flex items-center gap-3">
            <span className="relative block h-8 w-[33px] shrink-0 md:h-11 md:w-[45px]">
              <Image
                src={img.logoMarkLight}
                alt=""
                fill
                sizes="45px"
                priority
                className={cn(
                  "object-contain transition-opacity duration-500",
                  solid ? "opacity-0" : "opacity-100"
                )}
              />
              <Image
                src={img.logoMark}
                alt=""
                fill
                sizes="45px"
                priority
                className={cn(
                  "object-contain transition-opacity duration-500",
                  solid ? "opacity-100" : "opacity-0"
                )}
              />
            </span>
            <span
              className={cn(
                "font-display text-xl tracking-wide transition-colors md:text-2xl",
                solid ? "text-charcoal" : "text-ivory"
              )}
            >
              {brand.name}
            </span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-body text-[13px] uppercase tracking-[0.14em] transition-colors hover:opacity-70",
                  solid ? "text-charcoal" : "text-ivory"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              variant={solid ? "primary" : "outline-light"}
              size="sm"
              asChild
            >
              <Link href="/#booking">Book Your Date</Link>
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
          solid ? "border-charcoal/10" : "border-ivory/15"
        )}
      >
        <Container>
          <div className="grid grid-cols-3 gap-x-3 gap-y-1.5 py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-center font-body text-[11px] uppercase tracking-[0.1em] transition-colors",
                  solid ? "text-charcoal/80" : "text-ivory/85"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
