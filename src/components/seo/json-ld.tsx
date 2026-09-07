/**
 * Drops a block of JSON-LD into the document. It renders as a plain
 * `<script type="application/ld+json">`, which is exactly what crawlers read —
 * and because it is a Server Component the markup is in the initial HTML, not
 * added later by the browser.
 *
 * Pass one node or an array; either way it is serialised verbatim. Every
 * payload on this site is built from our own data files, never user input, so
 * `dangerouslySetInnerHTML` here carries no injection risk.
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
