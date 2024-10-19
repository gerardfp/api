export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request) {
  return new Response(`Index from ${process.env.VERCEL_REGION}`);
}
