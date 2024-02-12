const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const path = require('path');

const app = new Koa();
const router = new Router();;

// Function to index components, hooks, and utilities
function indexResources() {
  const srcPath = path.join(process.cwd(), 'src');
 
  const components = fs.readdirSync(srcPath + '/components').filter(file => file.endsWith('.js||.jsx||.ts||.tsx'));
  const hooks = fs.readdirSync(srcPath + '/hooks').filter(file => file.endsWith('.js||.ts'));
  const utils = fs.readdirSync(srcPath + '/utils').filter(file => file.endsWith('.js||.ts'));
  const docs = fs.readdirSync(srcPath).filter(file => file.endsWith('.md||.mdx'));

  return { components, hooks, utils, docs };
}

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(path.join(process.cwd(), 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Example usage
router.get('/index', async (ctx) => {
  ctx.body = indexResources();
});
