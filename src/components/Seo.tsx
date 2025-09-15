import { Helmet } from 'react-helmet-async';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

type SeoFallback = {
  title: string;
  description: string;
  canonical?: string;
  og?: Record<string, string>;
  schema?: Record<string, unknown>;
};

type SeoData = {
  title?: string;
  meta_description?: string;
  schema_jsonld?: Record<string, unknown>;
  canonical?: string;
};

export default function Seo({ routeKey, fallback }: { routeKey?: string; fallback: SeoFallback }) {
  const location = useLocation();
  const resolvedRoute = useMemo(() => routeKey || location.pathname, [routeKey, location.pathname]);
  const [data, setData] = useState<SeoData | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch(`/api/seo-store?route=${encodeURIComponent(resolvedRoute)}`);
        if (!res.ok) return;
        const json = await res.json();
        if (isMounted) setData(json);
      } catch (_) {
        // swallow errors; fallback will be used
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [resolvedRoute]);

  const title = data?.title || fallback.title;
  const description = data?.meta_description || fallback.description;
  const canonical = data?.canonical || fallback.canonical;
  const jsonLd = data?.schema_jsonld || fallback.schema;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}


