export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request, { params }) {

    let delay = 0;
    let element = params.slug.shift();
    
    if (element === 'w') {
        delay = ri(1000,5000);
        
        if (!isNaN(params.slug[0])) {
            delay = params.slug.shift();
        }
        if (!isNaN(params.slug[0])) {
            delay = ri(delay, params.slug.shift());
        }
        if (delay > 30000) {
            delay = 30000;
        }

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
    case 'date':
    case 'datetime':
    case 'time':
        // determina si estem en horari standard o d'estiu
        let now = new Date();
        const cetOffsetHours = (new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Berlin', timeZoneName: 'short' }).formatToParts(now).find(p => p.type==='timeZoneName').value) === 'GMT+2' ? 2 : 1;

        console.log(`cetoffset ${cetOffsetHours}`);

        now = new Date(now.getTime() + 3600000*cetOffsetHours - now.getTimezoneOffset() * 60000); // convert to gmt+0100 o gmt+0200 (central europe CET CEST)

        //let startDate = new Date(`1970-01-01T00:00:00+0${cetOffsetHours}:00`);
        let startDate = new Date(`1970-01-01T00:00:00`);
        let endDate = now;

        console.log(`0 date ${startDate} and ${endDate}`);

        if (params.slug[0] !== undefined) {
            if (params.slug[0] === 'now') {
                startDate = now;
                params.slug.shift();
            } else {
                if (element === 'time') {
                    //endDate = new Date(`1970-01-01T${params.slug.shift()}+0${cetOffsetHours}:00`);
                    endDate = new Date(`1970-01-01T${params.slug.shift()}`);
                } else {
                    endDate = new Date(params.slug.shift());
                }
            }
        }

        console.log(`1 date ${startDate} and ${endDate}`);

        if (params.slug[0] !== undefined) {
            startDate = endDate;
            if (params.slug[0] === 'now') {
                endDate = now;
                params.slug.shift();
                if (element === 'time') {
                    //startDate = new Date(`${now.toISOString().split("T")[0]}T${startDate.toISOString().split("T")[1].split(".")[0]}+0${cetOffsetHours}:00`);
                    startDate = new Date(`${now.toISOString().split("T")[0]}T${startDate.toISOString().split("T")[1].split(".")[0]}`);
                }
            } else {
                if (element === 'time') {
                    //endDate = new Date(`1970-01-01T${params.slug.shift()}+0${cetOffsetHours}:00`);
                    endDate = new Date(`1970-01-01T${params.slug.shift()}`);
                } else {
                    endDate = new Date(params.slug.shift());
                }
            }
        }

        console.log(`2 date ${startDate} and ${endDate}`);

        let date = startDate == endDate ? startDate : new Date(Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime());

        //console.log(`tzo ${date.getTimezoneOffset()}`);
        console.log(`date ${date}`);


        // date = new Date(date.getTime() + 3600000*cetOffsetHours - date.getTimezoneOffset() * 60000); // convert to gmt+0100 (central europe)

        if (element === 'date') {
            r = date.toLocaleDateString("es-ES");
        } else if (element === 'datetime'){
            r = date.toLocaleString("es-ES"); 
        } else {
            r = date.toLocaleTimeString("es-ES");
        }
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
    case 'temperature':
        r = "🌡 " + ri(-55,55) + " ºC";
        break;
    default:
        r = 'https://github.com/gerardfp/api';
    }
    
    if (delay > 0) {
        await new Promise(r => setTimeout(r, delay));
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
