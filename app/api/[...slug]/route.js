export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request, { params }) {
 if (params.slug[0] === 'w') {
   return new Response(`WWW from ${process.env.VERCEL_REGION} ${params}`);
 }
 return new Response(`Normal from ${process.env.VERCEL_REGION} ${params}`);
}
