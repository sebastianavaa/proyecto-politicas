// Endpoint que envía el payload al webhook de n8n y devuelve confirmación real.
// Resuelve el problema de que el front no sabía si el webhook recibió o no.

const WEBHOOK_URL = 'https://plutto-ops-backbone.fly.dev/webhook/proyecto-politicas-v2';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const payload = req.body;
  if (!payload || typeof payload !== 'object') {
    res.status(400).json({ error: 'Invalid payload' });
    return;
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      timeout: 10000, // 10s timeout
    });

    if (!response.ok) {
      res.status(502).json({
        error: 'Webhook error',
        detail: `HTTP ${response.status}`,
      });
      return;
    }

    res.status(200).json({
      ok: true,
      message: 'Reporte enviado correctamente al equipo Plutto',
    });
  } catch (err) {
    res.status(502).json({
      error: 'Failed to send report',
      detail: String(err.message || err),
    });
  }
}
