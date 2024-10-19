export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request, { params }) {

  let delay = 0;
  let element = params.slug[0];
 
  if (element === 'w') {
    delay = 5000;
    element = params.slug[1];
  }
 
  let r = '';
 
  switch (element) {
    case 'integer':
      r = Math.floor(Math.random() * 2000000);
      break;
    case 'float':
      r = Math.random();
      break;
    case 'string':
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      for(let i = 0; i < 16; i++)
        r += characters.charAt(Math.floor(Math.random() * characters.length));
      break;
    case 'moon':
      const moons = ["🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔"];
      r = moons[Math.floor(Math.random()*moons.length)];
      break;
    case 'weather':
      const weathers = ["☀️","🌤","⛅️","🌥","☁️","🌦","🌧","⛈","🌩","🌨"];
      r = weathers[Math.floor(Math.random()*weathers.length)];
      break;
    case 'wind':
      r = "💨 " + Math.floor(Math.random() * 200) + " km/h";
      break;
    default:
      r = 'Hello world';
  }

  if (delay > 0) {
    await new Promise(r => setTimeout(r, 5000));
  }
 
  return new Response(r);
}
