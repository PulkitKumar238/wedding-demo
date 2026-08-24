import { Container } from "@/components/ui/container";
import { brand, nav, footer } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory pt-20">
      <Container>
        <div className="grid gap-16 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="font-display text-2xl text-charcoal">
              {brand.name}
            </a>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-charcoal/60">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-[15px] text-charcoal/75 transition-colors hover:text-champagne"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 font-body text-[15px] text-charcoal/75">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-champagne">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-champagne">
                  {brand.phoneDisplay}
                </a>
              </li>
              <li className="text-charcoal/60">{brand.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
              Follow
            </h4>
            <ul className="mt-5 space-y-3 font-body text-[15px] text-charcoal/75">
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-champagne"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={brand.facebookUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-champagne"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-charcoal/10 py-8 font-body text-xs tracking-wide text-charcoal/45 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>{brand.location} — by invitation and availability.</p>
        </div>
      </Container>
    </footer>
  );
}
