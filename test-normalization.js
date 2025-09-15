// Quick test of our Semrush normalization
const fs = require('fs');

// Import our functions (simplified for Node.js)
function toNumber(x) {
  const n = Number(x);
  return Number.isFinite(n) ? n : undefined;
}

function moneyToNumber(x) {
  if (x == null) return undefined;
  const s = String(x).replace(/[$,]/g, '');
  return toNumber(s);
}

function toArray(x) {
  if (!x) return undefined;
  if (Array.isArray(x)) return x.map(String);
  return String(x).split(',').map((s) => s.trim()).filter(Boolean);
}

function normalizeSemrushResponse(raw) {
  if (!raw) return [];
  let rows = [];
  if (Array.isArray(raw?.result)) {
    rows = raw.result;
  }
  
  return rows.map((r) => ({
    keyword: r.keyword || r.query || r.text || '',
    search_volume: toNumber(r.search_volume ?? r.volume ?? r.searchVolume ?? r.avg_monthly_searches),
    keyword_difficulty: toNumber(r.keyword_difficulty ?? r.kd ?? r.keywordDifficulty),
    cpc: moneyToNumber(r.cpc ?? r.costPerClick ?? r['High CPC']),
    competition: toNumber(r.competition ?? r.comp ?? r.competitiveDensity ?? r.competition_index),
    competition_label: r.competition_value,
    intents: toArray(r.intents || r.intent),
    serp_features: toArray(r.serp_features || r.serpFeatures),
    locale: r.country || r.locale || r.cc,
    monthly_search_volumes: Array.isArray(r.monthly_search_volumes) ? r.monthly_search_volumes.map((m) => ({
      month: String(m.month || ''),
      year: Number(m.year),
      searches: Number(m.searches),
    })) : undefined,
    intent_confidence: toNumber(r.intent_confidence),
    advice: Array.isArray(r.advice) ? r.advice : undefined,
    content_gap_score: toNumber(r.content_gap_score),
    estimated_ctr: toNumber(r.estimated_ctr),
    keyword_freshness: toNumber(r.keyword_freshness),
  })).filter((k) => k.keyword);
}

function summarizeKeywords(items, topN = 10) {
  const total = items.length;
  const sorted = [...items].sort((a, b) => (b.search_volume || 0) - (a.search_volume || 0));
  const top = sorted.slice(0, topN);
  const vols = items.map((i) => i.search_volume || 0);
  const comps = items.map((i) => i.competition || 0);
  const avgV = vols.length ? vols.reduce((a, b) => a + b, 0) / vols.length : undefined;
  const avgC = comps.length ? comps.reduce((a, b) => a + b, 0) / comps.length : undefined;
  
  const kdBuckets = [
    { name: '0-19', min: 0, max: 19 },
    { name: '20-39', min: 20, max: 39 },
    { name: '40-59', min: 40, max: 59 },
    { name: '60-79', min: 60, max: 79 },
    { name: '80-100', min: 80, max: 100 },
  ].map((r) => ({ 
    bucket: r.name, 
    count: items.map((i) => i.keyword_difficulty).filter((v) => v >= r.min && v <= r.max).length 
  }));
  
  return {
    total_keywords: total,
    top_by_volume: top,
    avg_volume: avgV,
    avg_competition: avgC,
    kd_buckets: kdBuckets,
  };
}

// Test with mock data
const mockData = JSON.parse(fs.readFileSync('/tmp/mock_response.json', 'utf8'));
const normalized = normalizeSemrushResponse(mockData);
const summary = summarizeKeywords(normalized);

console.log('=== NORMALIZED DATA ===');
console.log(JSON.stringify(normalized, null, 2));

console.log('\n=== SUMMARY ===');
console.log(JSON.stringify(summary, null, 2));
