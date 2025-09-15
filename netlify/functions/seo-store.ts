import type { Handler } from '@netlify/functions';

type StoreBody = { routeKey: string; data: Record<string, unknown> };

// Simple in-memory store fallback for local dev; replace with Netlify Blobs/KV binding when configured
const memory: Record<string, any> = {};

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod === 'GET') {
      const route = event.queryStringParameters?.route;
      if (!route) return { statusCode: 400, body: JSON.stringify({ error: 'route is required' }) };
      const latest = memory[`${route}:latest`];
      if (!latest) return { statusCode: 404, body: JSON.stringify({ error: 'not_found' }) };
      return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify(latest) };
    }

    if (event.httpMethod === 'POST') {
      const adminToken = process.env.ADMIN_TOKEN;
      const provided = event.headers['x-admin-token'] || event.headers['X-Admin-Token'] as any;
      if (!adminToken || provided !== adminToken) {
        return { statusCode: 401, body: JSON.stringify({ error: 'unauthorized' }) };
      }
      const body = JSON.parse(event.body || '{}') as StoreBody;
      if (!body.routeKey || !body.data) return { statusCode: 400, body: JSON.stringify({ error: 'routeKey and data are required' }) };
      const timestamp = Date.now();
      memory[`${body.routeKey}:latest`] = body.data;
      memory[`${body.routeKey}:${timestamp}`] = body.data;
      return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ok: true, timestamp }) };
    }

    return { statusCode: 405, body: 'Method Not Allowed' };
  } catch (err: any) {
    return { statusCode: 500, body: JSON.stringify({ error: 'internal_error', message: err?.message }) };
  }
};


