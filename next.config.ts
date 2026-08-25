import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All photography is served from `public/photos` — no remote image hosts.
  images: {
    // Next 16 only serves quality values listed here (it defaults to [75]).
    // 45 is for the decorative backdrops that sit at 15-25% opacity, where the
    // difference is invisible but the saving is not.
    qualities: [45, 75],
  },
};

export default nextConfig;
