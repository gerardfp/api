export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request, { params }) {

  let delay = 0;
  let element = params.slug[0];
 
  if (element === 'w') {
    delay = 5000;
    element = params.slug[1];
  }
 
  let r = '';

  switch (element){
    case 'integer':
    case 'float':
      let min = 0;
      let max = element === 'integer' ? 2000000 : 1;
    
      try {
        max = params.slug[2];
    
        try {
          aux = params.slug[3];
          min = max;
          max = aux;
        } catch {}
      } catch {}
    
      if (element === 'integer') r = ri(min, max);
      else r = rf(min, max);

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

function ri(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function rf(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}
