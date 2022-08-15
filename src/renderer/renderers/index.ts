export const index = async (ctx: any) => {
    const dirs = [];

    // ROMファイル名を取得
    for await (const dir of Deno.readDir('./rom')) {
        const filename = dir.name;

        // nspファイル以外は除外
        if (!filename.endsWith('.nsp')) continue;

        dirs.push(dir.name);
    }

    ctx.render('index.ejs', { files: dirs });
};
