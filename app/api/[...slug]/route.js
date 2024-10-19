export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request, { params }) {

  let delay = 0;
  let element = params.slug.shift();
 
  if (element === 'w') {
    delay = 5000;
    element = params.slug.shift();
  }
 
  let r = '';

  switch (element){
    case 'integer':
    case 'float':
      let min = 0;
      let max = element === 'integer' ? 2000000 : 1;
      
      if (params.slug[0] !== undefined) {
        max = params.slug.shift();
      }
      if (params.slug[0] !== undefined) {
        min = max;
        max = params.slug.shift();
      }
        
      if (element === 'integer'){
        console.log(`generating ${min} and ${max}`);
        r = ri(min, max);
      } else {
        console.log(`generating float ${min} and ${max}`);
        r = rf(min, max);
      }

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
 console.log(`now generating float ${min} and ${max}`);
  return Math.random() * (max - min) + min;
}
