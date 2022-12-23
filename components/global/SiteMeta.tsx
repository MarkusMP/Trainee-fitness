/**
 * All the shared stuff that goes into <head> on `(personal)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */
export function SiteMeta({
  description,
  image,
  title,
  noIndex = false,
}: {
  description?: string;
  image?: string;
  title?: string;
  noIndex: boolean;
}) {
  return (
    <>
      <title>{title && title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />

      <meta
        key="description"
        name="description"
        content={description && description}
      />

      {image && <meta property="og:image" content={image} />}
      {noIndex && <meta key="robots" name="robots" content="noindex,follow" />}
      {noIndex && (
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      )}
    </>
  );
}
