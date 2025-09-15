export type SemrushQuestionKeyword = {
  keyword: string;
  search_volume?: number;
  keyword_difficulty?: number;
  cpc?: number;
  competition?: number;
  competition_label?: 'LOW' | 'MEDIUM' | 'HIGH' | string;
  intents?: string[];
  serp_features?: string[];
  locale?: string;
  monthly_search_volumes?: { month: string; year: number; searches: number }[];
};

export type KeywordResearchResponse = {
  raw: unknown;
  normalized: SemrushQuestionKeyword[];
  meta: Record<string, string>;
};

export function normalizeSemrushResponse(raw: any): SemrushQuestionKeyword[] {
  if (!raw) return [];
  // The RapidAPI wrapper can return different shapes; attempt to coerce common ones
  // Case 1: Working endpoint shape: { result: [ ... ] }
  let rows: any[] = [];
  if (Array.isArray(raw?.result)) {
    rows = raw.result;
  }
  // Case 2: Provided sample shape: { all_keywords: { a: { keywords_data: [ ... ] } } }
  else {
    const ak = raw?.all_keywords;
    if (ak && typeof ak === 'object') {
      const groups = Object.values(ak).filter((v: any) => v && typeof v === 'object' && Array.isArray((v as any).keywords_data)) as any[];
      for (const g of groups) rows.push(...(g.keywords_data as any[]));
    }
  }
  // Case 3: generic arrays
  if (rows.length === 0) rows = Array.isArray(raw?.data) ? raw.data : Array.isArray(raw) ? raw : Array.isArray(raw?.keywords) ? raw.keywords : [];

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
    monthly_search_volumes: Array.isArray(r.monthly_search_volumes) ? r.monthly_search_volumes.map((m: any) => ({
      month: String(m.month || ''),
      year: Number(m.year),
      searches: Number(m.searches),
    })) : undefined,
    // Additional fields from working endpoint
    intent_confidence: toNumber(r.intent_confidence),
    advice: Array.isArray(r.advice) ? r.advice : undefined,
    content_gap_score: toNumber(r.content_gap_score),
    estimated_ctr: toNumber(r.estimated_ctr),
    keyword_freshness: toNumber(r.keyword_freshness),
  })).filter((k) => k.keyword);
}

export function semrushFieldMeta(): Record<string, string> {
  return {
    keyword: 'The query text (question-format in this endpoint).',
    search_volume: 'Average monthly searches (approximate).',
    keyword_difficulty: '0-100 score estimating ranking difficulty.',
    cpc: 'Avg cost-per-click in USD for paid ads.',
    competition: 'Paid competition density (0-1 or 0-100 depending on source).',
    intents: 'Searcher intent labels (informational, navigational, transactional, commercial).',
    serp_features: 'SERP features present (PeopleAlsoAsk, FeaturedSnippet, etc.).',
    locale: 'Geo locale/country for the dataset.',
  };
}

function toNumber(x: any): number | undefined {
  const n = Number(x);
  return Number.isFinite(n) ? n : undefined;
}

function toArray(x: any): string[] | undefined {
  if (!x) return undefined;
  if (Array.isArray(x)) return x.map(String);
  return String(x).split(',').map((s) => s.trim()).filter(Boolean);
}

function moneyToNumber(x: any): number | undefined {
  if (x == null) return undefined;
  const s = String(x).replace(/[$,]/g, '');
  return toNumber(s);
}

export type SemrushSummary = {
  total_keywords: number;
  top_by_volume: SemrushQuestionKeyword[];
  avg_volume?: number;
  avg_competition?: number;
  kd_buckets: { bucket: string; count: number }[];
};

export function summarizeKeywords(items: SemrushQuestionKeyword[], topN = 10): SemrushSummary {
  const total = items.length;
  const sorted = [...items].sort((a, b) => (b.search_volume || 0) - (a.search_volume || 0));
  const top = sorted.slice(0, topN);
  const vols = items.map((i) => i.search_volume || 0);
  const comps = items.map((i) => i.competition || 0);
  const avgV = vols.length ? average(vols) : undefined;
  const avgC = comps.length ? average(comps) : undefined;
  const kdBuckets = bucketize(items.map((i) => i.keyword_difficulty).filter((x) => typeof x === 'number') as number[]);
  return {
    total_keywords: total,
    top_by_volume: top,
    avg_volume: avgV,
    avg_competition: avgC,
    kd_buckets: kdBuckets,
  };
}

function average(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / (arr.length || 1);
}

function bucketize(vals: number[]): { bucket: string; count: number }[] {
  const ranges = [
    { name: '0-19', min: 0, max: 19 },
    { name: '20-39', min: 20, max: 39 },
    { name: '40-59', min: 40, max: 59 },
    { name: '60-79', min: 60, max: 79 },
    { name: '80-100', min: 80, max: 100 },
  ];
  return ranges.map((r) => ({ bucket: r.name, count: vals.filter((v) => v >= r.min && v <= r.max).length }));
}


