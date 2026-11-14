import {createServer} from 'node:http';
import {createReadStream, existsSync, statSync} from 'node:fs';
import {resolve, extname, sep} from 'node:path';

const root = resolve('out');
const types = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.woff2':'font/woff2','.txt':'text/plain'};
if (!existsSync(resolve(root,'index.html'))) throw new Error('Build the site first.');
createServer((req,res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let file = resolve(root, '.' + decodeURIComponent(url.pathname));
    if (file !== root && !file.startsWith(root+sep)) {res.writeHead(403).end();return;}
    if (existsSync(file) && statSync(file).isDirectory()) file=resolve(file,'index.html');
    if (!existsSync(file)) {res.writeHead(404, {'Content-Type':types['.html']});createReadStream(resolve(root,'404.html')).pipe(res);return;}
    res.writeHead(200, {'Content-Type':types[extname(file)] || 'application/octet-stream'});
    if(req.method==='HEAD') res.end(); else createReadStream(file).pipe(res);
  } catch { res.writeHead(400).end(); }
}).listen(Number(process.env.PORT || 3000),'127.0.0.1', () => console.log('NFHS local server is ready.'));
