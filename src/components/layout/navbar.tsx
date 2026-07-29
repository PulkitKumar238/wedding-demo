"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { brand, nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between md:h-24">
          <a
            href="#top"
            className={cn(
              "font-display text-xl tracking-wide transition-colors md:text-2xl",
              scrolled || open ? "text-charcoal" : "text-ivory"
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

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className={cn(
              "-mr-2 p-2 lg:hidden",
              scrolled || open ? "text-charcoal" : "text-ivory"
            )}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <Container className="flex flex-col gap-6 pb-10 pt-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-charcoal"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-fit">
                <a href="#booking" onClick={() => setOpen(false)}>
                  Book Consultation
                </a>
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
