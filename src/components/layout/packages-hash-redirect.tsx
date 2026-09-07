"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Packages used to be a section of this page, so "/#packages" is out in the
 * world — in the studio's own quotations, among other places. A fragment never
 * reaches the server, so this has to be caught in the browser and sent on to
 * the route that replaced it.
 *
 * `replace` rather than `push`, so Back from /packages goes wherever the
 * visitor actually came from instead of bouncing them through here again.
 */
export function PackagesHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const go = () => {
      if (window.location.hash === "#packages") router.replace("/packages");
    };

    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, [router]);

  return null;
}
