/* POST /api/video-pin  {"pin": "...", "file": "name.mp4"}
   Right PIN -> {"url": "/videos/name.mp4?dl=..."}, a download link that works for 10 minutes.
   The PIN lives only in the VIDEO_PIN environment variable in Vercel. */
import { makeToken, safeEqual } from "../lib/video-token.js";
export const config = { runtime: "edge" };
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
export default async function handler(request) {
  if (request.method !== "POST") return json({ error: "Use POST" }, 405);
  const PIN = process.env.VIDEO_PIN;
  if (!PIN) return json({ error: "Downloads are not set up yet. Please ask the teacher." }, 503);
  let body = {};
  try { body = await request.json(); } catch (e) {}
  const file = String(body.file || "");
  if (!/^[a-z0-9-]+\.mp4$/.test(file)) return json({ error: "Unknown video" }, 400);
  if (!safeEqual(String(body.pin || "").trim(), PIN)) {
    await new Promise((r) => setTimeout(r, 1200)); // slows down guessing
    return json({ error: "Wrong PIN" }, 403);
  }
  return json({ url: "/videos/" + file + "?dl=" + (await makeToken(PIN, file, 600)) });
}
