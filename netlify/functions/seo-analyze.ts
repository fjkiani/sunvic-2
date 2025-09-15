import type { Handler } from '@netlify/functions';

type AnalyzeBody = {
  keywordData: unknown;
  routeKey: string;
  model?: string;
  temperature?: number;
  companyContext?: string;
};

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
    const openaiKey = process.env.OPENAI_API_KEY;
    if (!openaiKey) return { statusCode: 500, body: JSON.stringify({ error: 'OPENAI_API_KEY not configured' }) };
    const body = JSON.parse(event.body || '{}') as AnalyzeBody;
    if (!body.routeKey) return { statusCode: 400, body: JSON.stringify({ error: 'routeKey required' }) };

    const systemPrompt = `You are an expert SEO strategist for a general contractor. Output ONLY strict JSON as per the schema.`;
    const userPrompt = JSON.stringify({
      keywordData: body.keywordData,
      route: body.routeKey,
      companyContext: body.companyContext || null,
      schema: 'see repo .cursor/rules/llm-schema.mdc',
    });

    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: body.model || 'gpt-4o-mini',
        temperature: body.temperature ?? 0.2,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        response_format: { type: 'json_object' },
      }),
    });
    if (!resp.ok) {
      const text = await resp.text();
      return { statusCode: resp.status, body: text };
    }
    const json = await resp.json();
    const content = json.choices?.[0]?.message?.content || '{}';
    return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: content };
  } catch (err: any) {
    return { statusCode: 500, body: JSON.stringify({ error: 'internal_error', message: err?.message }) };
  }
};


