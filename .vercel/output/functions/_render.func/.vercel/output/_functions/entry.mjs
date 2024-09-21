import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CT0wQ7I3.mjs';
import { manifest } from './manifest_B96NC0Vm.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/creating.astro.mjs');
const _page2 = () => import('./pages/dummy.astro.mjs');
const _page3 = () => import('./pages/gallery/image/_---id_.astro.mjs');
const _page4 = () => import('./pages/gallery.astro.mjs');
const _page5 = () => import('./pages/posts/_slug_.astro.mjs');
const _page6 = () => import('./pages/posts/_---page_.astro.mjs');
const _page7 = () => import('./pages/resource.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/creating.astro", _page1],
    ["src/pages/dummy.astro", _page2],
    ["src/pages/gallery/image/[...id].astro", _page3],
    ["src/pages/gallery/index.astro", _page4],
    ["src/pages/posts/[slug].astro", _page5],
    ["src/pages/posts/[...page].astro", _page6],
    ["src/pages/resource.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "7d728d16-7de3-48a0-8bf2-2b084a69d19a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
