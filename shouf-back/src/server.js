// server.js
import Koa from 'koa';
import cors from '@koa/cors';
import Router from '@koa/router';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import c2k from 'koa-connect';
import { findComponents, componentJsonPath } from '../src/get-components.js'; 
import { listComponents } from '../src/list-components.js';


async function startServer() {
  const app = new Koa();
  app.use(cors());
  const router = new Router();
  const ports = [13001, 13002, 13003, 13004, 13005, 13006];
  const port = ports[0];


  router.get('/api/components', async (ctx) => {
    try {
      const data = fs.readFileSync(componentJsonPath, 'utf8');
      ctx.type = 'application/json';
      ctx.body = JSON.parse(data);
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: "Failed to load component documentation." };
    }
  });

  router.get('/api/componentsList', async (ctx) => {
    const componentsList = listComponents();
    ctx.body = componentsList;
  });


  app.use(router.routes()).use(router.allowedMethods());

  const findAvailablePort = async (ports) => {
    for (const port of ports) {
      const isAvailable = await new Promise((resolve) => {
        const server = app.listen(port, () => {
          server.close();
          resolve(true);
        });
        server.on('error', () => {
          resolve(false);
        });
      });
      if (isAvailable) {
        return port;
      }
    }
    throw new Error('No available ports');
  }

  const availablePort = await findAvailablePort(ports);
  const vite = await createViteServer({
    server: { middlewareMode: 'koa' },
  });
  app.use(c2k(vite.middlewares));
  app.listen(availablePort);
  console.log(`API running at http://localhost:${availablePort}/api/components`);
  console.log(`Press Ctrl+C to stop the server`);
}




export { startServer };

startServer();
