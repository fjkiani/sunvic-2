import { useState } from 'react';

export default function AdminSeoPage() {
  const [keyword, setKeyword] = useState('home remodeling seattle');
  const [country, setCountry] = useState('us');
  const [routeKey, setRouteKey] = useState('/services');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run() {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const kr = await fetch(`/.netlify/functions/keyword-research?keyword=${encodeURIComponent(keyword)}&country=${country}`);
      const keywordData = await kr.json();
      const analyzed = await fetch('/.netlify/functions/seo-analyze', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ keywordData, routeKey }),
      });
      const analysis = await analyzed.json();
      setResult(analysis);
    } catch (e: any) {
      setError(e?.message || 'Failed to run analysis');
    } finally {
      setLoading(false);
    }
  }

  async function saveLatest() {
    try {
      const resp = await fetch('/.netlify/functions/seo-store', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-admin-token': (window as any).ADMIN_TOKEN || '',
        },
        body: JSON.stringify({ routeKey, data: result }),
      });
      if (!resp.ok) throw new Error('Unauthorized or failed');
      alert('Saved to latest.');
    } catch (e: any) {
      alert(e?.message || 'Failed to save');
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Admin SEO Console</h1>
      <div className="grid gap-2 mb-4" style={{ maxWidth: 600 }}>
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Seed keyword" className="border p-2" />
        <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country (us)" className="border p-2" />
        <input value={routeKey} onChange={(e) => setRouteKey(e.target.value)} placeholder="Route key (/services)" className="border p-2" />
        <button onClick={run} className="bg-blue-600 text-white px-4 py-2" disabled={loading}>{loading ? 'Running…' : 'Run Research + Analyze'}</button>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      {result && (
        <div>
          <div className="mb-2">
            <button onClick={saveLatest} className="bg-green-600 text-white px-3 py-1">Save as Latest</button>
          </div>
          <pre className="text-xs whitespace-pre-wrap break-words border p-3 rounded" style={{ maxWidth: '100%', overflow: 'auto' }}>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}


