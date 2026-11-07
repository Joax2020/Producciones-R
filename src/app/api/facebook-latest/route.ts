import { NextResponse } from "next/server";

export const revalidate = 3600; // se actualiza cada hora

export async function GET() {
  const url = `https://graph.facebook.com/v21.0/${process.env.FB_PAGE_ID}/posts?fields=message,permalink_url,full_picture,created_time&limit=1&access_token=${process.env.FB_PAGE_TOKEN}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return NextResponse.json({ error: true }, { status: 500 });
  const json = await res.json();
  return NextResponse.json(json.data?.[0] ?? null);
}