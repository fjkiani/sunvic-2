import { useState } from 'react';
import type { KeywordResearchResponse } from '../utils/semrush';

export default function SeoTestPage() {
  const [keyword, setKeyword] = useState('ai tools');
  const [country, setCountry] = useState('us');
  const [data, setData] = useState<KeywordResearchResponse & { summary?: any } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run() {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch(`/.netlify/functions/keyword-research?keyword=${encodeURIComponent(keyword)}&country=${country}`);
      const json = await res.json();
      setData(json);
    } catch (e: any) {
      setError(e?.message || 'Failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-semibold mb-2">SEO Test</h1>
      <div className="flex gap-2 mb-4">
        <input className="border p-2" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="keyword" />
        <input className="border p-2" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="country (us)" />
        <button onClick={run} className="bg-blue-600 text-white px-3">{loading ? 'Loading…' : 'Fetch'}</button>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      {data && (
        <div className="grid gap-3">
          <section>
            <h2 className="font-semibold">Summary</h2>
            <pre className="text-xs border p-2 overflow-auto">{JSON.stringify(data.summary, null, 2)}</pre>
          </section>
          <section>
            <h2 className="font-semibold">Top normalized</h2>
            <pre className="text-xs border p-2 overflow-auto">{JSON.stringify(data.normalized.slice(0, 20), null, 2)}</pre>
          </section>
          <section>
            <h2 className="font-semibold">Meta</h2>
            <pre className="text-xs border p-2 overflow-auto">{JSON.stringify(data.meta, null, 2)}</pre>
          </section>
        </div>
      )}
    </div>
  );
}


