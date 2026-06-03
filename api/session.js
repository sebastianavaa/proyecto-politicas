import { Redis } from '@upstash/redis';

// Acepta los nombres de variable que inyecta Vercel (KV_*) o Upstash (UPSTASH_*).
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Estado compartido por empresa (sessionId).
//   GET  /api/session?s=<sessionId>  → { state: {...} | null }
//   POST /api/session?s=<sessionId>  body: estado completo → { ok: true }
export default async function handler(req, res) {
  const sessionId = (req.query.s || '').toString().trim();
  if (!sessionId) {
    res.status(400).json({ error: 'missing session id' });
    return;
  }
  const key = `dd_v2:${sessionId}`;

  try {
    if (req.method === 'GET') {
      const state = await redis.get(key);
      res.status(200).json({ state: state || null });
      return;
    }

    if (req.method === 'POST') {
      const state = req.body;
      if (!state || typeof state !== 'object') {
        res.status(400).json({ error: 'invalid body' });
        return;
      }
      await redis.set(key, state);
      res.status(200).json({ ok: true });
      return;
    }

    res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    res.status(500).json({ error: 'kv error', detail: String((e && e.message) || e) });
  }
}
