import type { Handler } from '@netlify/functions';
import { normalizeSemrushResponse, semrushFieldMeta, summarizeKeywords } from '../../src/utils/semrush';

const RAPIDAPI_HOST = 'semrush-keyword-magic-tool.p.rapidapi.com';

export const handler: Handler = async (event) => {
  try {
    const qp = event.queryStringParameters || {};
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(qp)) {
      if (typeof v === 'string') params.append(k, v);
    }
    const keyword = params.get('keyword') || '';
    const country = params.get('country') || 'us';
    if (!keyword) {
      return { statusCode: 400, body: JSON.stringify({ error: 'keyword is required' }) };
    }

    const url = `https://${RAPIDAPI_HOST}/keyword-research?${new URLSearchParams({ keyword, country, languagecode: 'en' }).toString()}`;
    const apiKey = process.env.RAPIDAPI_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: 'RAPIDAPI_KEY not configured' }) };
    }

    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': apiKey,
      },
    });
    const raw = await resp.json();
    const normalized = normalizeSemrushResponse(raw);
    const meta = semrushFieldMeta();
    const summary = summarizeKeywords(normalized, 15);
    return {
      statusCode: resp.status,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ raw, normalized, meta, summary }),
    };
  } catch (err: any) {
    return { statusCode: 500, body: JSON.stringify({ error: 'internal_error', message: err?.message }) };
  }
};


