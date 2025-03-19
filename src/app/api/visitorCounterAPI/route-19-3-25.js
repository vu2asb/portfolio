// src/app/api/visitorCounter/route.js
let visitorCount = 0;

export async function GET() {
  visitorCount += 1;
  return Response.json({ count: visitorCount });
}
