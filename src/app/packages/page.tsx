import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Packages } from "@/components/sections/packages";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Packages",
  description: `Standard wedding photography and film packages from ${brand.name}, with the add-on services and hourly rates that go with them.`,
};

/*
  Packages sits on a route of its own rather than in the home page's scroll:
  nine of them, even collapsed, were a long stretch of a page nobody had asked
  to read. The nav item points here, and every other nav item is an absolute
  "/#section" so it still works from this page.
*/
export default function PackagesPage() {
  return (
    <>
      {/*
        The navbar is fixed, and on a phone it wraps to three rows, so this
        page needs to start below it — the home page never did, because the
        hero sits under the navbar by design.
      */}
      <div className="bg-ivory pt-32 md:pt-28">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/50 transition-colors hover:text-charcoal"
          >
            <ArrowLeft size={14} />
            Back
          </Link>
        </Container>
      </div>

      <Packages />
    </>
  );
}
