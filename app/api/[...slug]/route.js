export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request, { params }) {

    let delay = 0;
    let element = params.slug.shift();
    
    if (element === 'w') {
        delay = 5000;
        element = params.slug.shift();
        if (!isNaN(params.slug[0])) {
            delay = params.slug.shift();
            if (delay > 30000) delay = 30000;
        }
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
            r = ri(min, max);
        } else {
            r = rf(min, max);
        }
    
        break;
    case 'string':
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const length = params.slug[0] !== undefined ? params.slug.shift() : 16;
        for(let i = 0; i < length; i++)
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
    return Math.floor(rf(min, max));
}

function rf(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.random() * (maxFloored - minCeiled) + minCeiled;
}
