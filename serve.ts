import { Application, Router }                from 'https://deno.land/x/oak@v10.6.0/mod.ts';
import { viewEngine, dejsEngine, oakAdapter } from 'https://deno.land/x/view_engine@v10.6.0/mod.ts';

import { index, file } from './src/renderer/index.ts'

const app    = new Application();
const router = new Router();

const viewConfig: ViewConfig = {
    viewRoot: <string>'./views'
};

app.use(viewEngine(oakAdapter, dejsEngine, viewConfig));
app.use(router.routes());
app.use(router.allowedMethods());

router.get('/', index);
router.get('/:file', file);

console.log('Listening on http://localhost:8000');
await app.listen({ port: 8000 });
