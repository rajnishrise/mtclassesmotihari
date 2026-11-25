/* Keeps the lesson videos (videos/*.mp4) from being opened or downloaded straight from a link.
   - The video player on our pages still streams them (the browser marks those requests as "video").
   - Opening the file as a page or download (address bar, shared link, download link) needs a
     signed ?dl= link, which api/video-pin.js gives out only for the right PIN. */
import { checkToken } from "./lib/video-token.js";
export const config = { matcher: "/videos/:path*" };
export default async function middleware(request) {
  const url = new URL(request.url);
  if (!/\.mp4$/i.test(url.pathname)) return; // posters and other files: no change
  const dest = request.headers.get("sec-fetch-dest");
  if (dest !== "document" && dest !== "iframe" && dest !== "embed" && dest !== "object") return; // player streaming
  const file = url.pathname.split("/").pop();
  const PIN = process.env.VIDEO_PIN;
  if (PIN && (await checkToken(PIN, file, url.searchParams.get("dl")))) return;
  return new Response("This video can be downloaded only with the PIN from MT Classes. Watch it on the website.", { status: 403, headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" } });
}
