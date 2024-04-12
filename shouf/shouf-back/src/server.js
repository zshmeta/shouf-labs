// server.js
import Koa from 'koa';
import cors from '@koa/cors';
import Router from '@koa/router';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import c2k from 'koa-connect';
import { findComponents, componentJsonPath, updateComponentList } from './get-components.js';
// import { listComponents } from '../src/list-components.js';

async function startServer() {
  const app = new Koa();
  app.use(cors({ origin: '*' }));
  const router = new Router();
  const ports = [13001, 13002, 13003, 13004, 13005, 13006];
  const port = ports[0];


  router.get('/api/components', async (ctx) => {
    try {
      updateComponentList();
      const data = fs.readFileSync(componentJsonPath, 'utf8');
      ctx.type = 'application/json';
      ctx.body = JSON.parse(data);
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: "Failed to load component documentation." };
    }
  });

router.post('/api/updateComponents', async (ctx) => {
  try {
    // Get the list of components before the update
    const oldComponentsList = listComponents();

    // Update the components
    const componentData = findComponents();
    fs.writeFileSync(componentJsonPath, JSON.stringify(componentData, null, 2), 'utf8');

    // Refresh the server
    server.close();
    server = await startServer();

    // Get the list of components after the update
    const newComponentsList = listComponents();

    // Find the new components
    const addedComponents = newComponentsList.filter(component => !oldComponentsList.includes(component));

    // Serve the new components in the response
    ctx.type = 'application/json';
    ctx.body = addedComponents;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: "Failed to update component documentation." };
  }
});


  router.get('/api/componentsList', async (ctx) => {
    const componentsList = listComponents();
    ctx.body = componentsList;
  });


  app.use(router.routes()).use(router.allowedMethods());

  const findAvailablePort = async (ports) => {
    for (const port of ports) {
      try {
        await new Promise((resolve, reject) => {
          const server = app.listen(port, () => {
            server.close(resolve);
          }).on('error', reject);
        });
        return port;  // This port is available
      } catch (error) {
        continue;  // This port is not available, check the next one
      }
    }
    throw new Error('No available ports');
  }

  try {
    const availablePort = await findAvailablePort(ports);
    const vite = await createViteServer({
      server: { middlewareMode: 'koa' },
    });
    app.use(c2k(vite.middlewares));
    app.listen(availablePort, () => {
      console.log(`Server running on http://localhost:${availablePort}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
  }

  console.log(`API running at http://localhost:${availablePort}/api/components`);
}


export { startServer };

