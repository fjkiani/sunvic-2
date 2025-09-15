import type { Handler } from '@netlify/functions';

export const config = {
  schedule: '@weekly',
};

export const handler: Handler = async () => {
  try {
    // Example seeds; replace with env or storage-driven list
    const seeds = [
      { route: '/services', keyword: 'home remodeling seattle', country: 'us' },
      { route: '/portfolio', keyword: 'kitchen remodel ideas', country: 'us' },
    ];

    for (const seed of seeds) {
      const kr = await fetch(`${process.env.URL || ''}/.netlify/functions/keyword-research?${new URLSearchParams({ keyword: seed.keyword, country: seed.country }).toString()}`);
      const keywordData = await kr.json();

      const analyzed = await fetch(`${process.env.URL || ''}/.netlify/functions/seo-analyze`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ keywordData, routeKey: seed.route }),
      });
      const analysis = await analyzed.json();

      await fetch(`${process.env.URL || ''}/.netlify/functions/seo-store`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-admin-token': process.env.ADMIN_TOKEN || '' },
        body: JSON.stringify({ routeKey: seed.route, data: analysis }),
      });
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, processed: seeds.length }) };
  } catch (err: any) {
    return { statusCode: 500, body: JSON.stringify({ error: 'internal_error', message: err?.message }) };
  }
};


