/* Shared by api/video-pin.js and middleware.js.
   A download link carries ?dl=<expiry>.<signature>; the signature is an HMAC of the file name and expiry,
   keyed with the VIDEO_PIN environment variable (set in Vercel, never stored in this repository). */
const enc = new TextEncoder();
async function sign(secret, msg) {
  const key = await crypto.subtle.importKey("raw", enc.encode("mt-video:" + secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
export async function makeToken(secret, file, ttlSeconds) {
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  return exp + "." + (await sign(secret, file + "|" + exp));
}
export async function checkToken(secret, file, token) {
  const [exp, sig] = String(token || "").split(".");
  if (!exp || !sig || !/^\d+$/.test(exp) || +exp < Date.now() / 1000) return false;
  return safeEqual(sig, await sign(secret, file + "|" + exp));
}
export function safeEqual(a, b) {
  a = String(a); b = String(b);
  let d = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) d |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return d === 0;
}
