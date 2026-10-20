import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const page = await readFile(new URL('./index.html', import.meta.url));
createServer((req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  if (path === '/' || path === '/index.html') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : page);
  } else {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
}).listen(process.env.PORT ?? 3000, '0.0.0.0');
