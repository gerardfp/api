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
      r = ri(2000000);
      break;
    case 'float':
      r = Math.random();
      break;
    case 'string':
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      for(let i = 0; i < 16; i++)
        r += characters.charAt(ri(characters.length));
      break;
    case 'moon':
      r = re(["🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔"]);
      break;
    case 'weather':
      r = re(["☀️","🌤","⛅️","🌥","☁️","🌦","🌧","⛈","🌩","🌨"]);
      break;
    case 'wind':
      r = "💨 " + ri(200) + " km/h";
      break;
    default:
      r = 'Hello world';
  }

  if (delay > 0) {
    await new Promise(r => setTimeout(r, 5000));
  }
 
  return new Response(r);
}


function re(a) {
  return a[ri(a.length)];
}

function ri(max) {
  return ri(0,max);
}

function ri(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
