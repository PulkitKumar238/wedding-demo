import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { weddings, servicePages } from "@/data/pages";
import { img } from "@/data/images";

/**
 * Every indexable URL on the site. Built from the same data the pages render
 * from, so a new wedding or service appears here the moment it is added.
 *
 * `lastModified` is the build time — the site is fully static, so a deploy is
 * the only thing that can change a page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const abs = (path: string) => `${siteUrl}${path}`;

  const core: MetadataRoute.Sitemap = [
    { url: abs("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: abs("/wedding-photography-lucknow"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: abs("/weddings"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: abs("/films"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: abs("/services"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: abs("/packages"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceUrls: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: abs(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const weddingUrls: MetadataRoute.Sitemap = weddings.map((w) => ({
    url: abs(`/weddings/${w.slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
    images: [
      `${siteUrl}${img.couples[w.key as keyof typeof img.couples].cover}`,
    ],
  }));

  return [...core, ...serviceUrls, ...weddingUrls];
}
