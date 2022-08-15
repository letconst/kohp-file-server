import { Application, Router }                from 'https://deno.land/x/oak/mod.ts';
import { viewEngine, dejsEngine, oakAdapter } from 'https://deno.land/x/view_engine@v10.6.0/mod.ts';

const app    = new Application();
const router = new Router();

const viewConfig: ViewConfig = {
    viewRoot: <string>'./views'
};

app.use(viewEngine(oakAdapter, dejsEngine));
app.use(router.routes());
app.use(router.allowedMethods());

router.get('/', () => {
    // TODO: buildsフォルダのファイル一覧取得・描画
});

console.log('Listening on http://localhost:8000');
await app.listen({ port: 8000 });
