import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_BftJAW9M.mjs';
import { f as decodeKey } from './chunks/astro/server_CZcIYBaE.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/sange/Desktop/Astrojs/portfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"creating/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/creating","isIndex":false,"type":"page","pattern":"^\\/creating\\/?$","segments":[[{"content":"creating","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/creating.astro","pathname":"/creating","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"dummy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dummy","isIndex":false,"type":"page","pattern":"^\\/dummy\\/?$","segments":[[{"content":"dummy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dummy.astro","pathname":"/dummy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":true,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery/index.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"resource/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resource","isIndex":false,"type":"page","pattern":"^\\/resource\\/?$","segments":[[{"content":"resource","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resource.astro","pathname":"/resource","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/components/FeaturedPosts.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/lib/post.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/lib/index.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/pages/posts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/pages/creating.astro",{"propagation":"none","containsHead":true}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/pages/dummy.astro",{"propagation":"none","containsHead":true}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/pages/gallery/image/[...id].astro",{"propagation":"none","containsHead":true}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/pages/gallery/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/sange/Desktop/Astrojs/portfolio/src/pages/resource.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/dummy@_@astro":"pages/dummy.astro.mjs","\u0000@astro-page:src/pages/posts/[...page]@_@astro":"pages/posts/_---page_.astro.mjs","\u0000@astro-page:src/pages/resource@_@astro":"pages/resource.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/gallery/image/[...id]@_@astro":"pages/gallery/image/_---id_.astro.mjs","\u0000@astro-page:src/pages/gallery/index@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/creating@_@astro":"pages/creating.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/sange/Desktop/Astrojs/portfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/sange/Desktop/Astrojs/portfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/sange/Desktop/Astrojs/portfolio/src/content/blog/docker-commands.mdx?astroContentCollectionEntry=true":"chunks/docker-commands_DfBW5-5E.mjs","C:/Users/sange/Desktop/Astrojs/portfolio/src/content/blog/nextjs-with-bun.mdx?astroContentCollectionEntry=true":"chunks/nextjs-with-bun_D0IRy6Wl.mjs","C:/Users/sange/Desktop/Astrojs/portfolio/src/content/blog/docker-commands.mdx?astroPropagatedAssets":"chunks/docker-commands_CtjQTeyv.mjs","C:/Users/sange/Desktop/Astrojs/portfolio/src/content/blog/nextjs-with-bun.mdx?astroPropagatedAssets":"chunks/nextjs-with-bun_BfrHVaY-.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/sange/Desktop/Astrojs/portfolio/src/content/blog/docker-commands.mdx":"chunks/docker-commands_kgajyft5.mjs","C:/Users/sange/Desktop/Astrojs/portfolio/src/content/blog/nextjs-with-bun.mdx":"chunks/nextjs-with-bun_BFjtUKg4.mjs","\u0000@astrojs-manifest":"manifest_ConicXAN.mjs","@/components/BlogPost":"_astro/BlogPost.BLRD6eaA.js","@/components/Gallery":"_astro/Gallery.CcgMpiDM.js","C:/Users/sange/Desktop/Astrojs/portfolio/src/components/ProjectCard.tsx":"_astro/ProjectCard.zzi6jank.js","@/components/ViewCounter":"_astro/ViewCounter.Cy-1uVfc.js","C:/Users/sange/Desktop/Astrojs/portfolio/src/components/ProfileIcon":"_astro/ProfileIcon.fmsbj0DD.js","C:/Users/sange/Desktop/Astrojs/portfolio/src/components/ThemeCustomizer":"_astro/ThemeCustomizer.BNPC5t9i.js","@astrojs/react/client.js":"_astro/client.BpsBl9sG.js","/astro/hoisted.js?q=0":"_astro/hoisted.D-2wbxhY.js","C:/Users/sange/Desktop/Astrojs/portfolio/src/components/ResponsiveNav":"_astro/ResponsiveNav.B8k7TNrO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/creating.CSJDV-op.css","/favicon.svg","/oreki.jpg","/sng1.jpg","/icons/astro-icon.svg","/icons/docker-icon.svg","/icons/git-scm-icon.svg","/icons/github-tile.svg","/icons/mongodb-icon.svg","/icons/nextjs-icon-svgrepo-com.svg","/icons/nextjs-icon.svg","/icons/postgresql-icon.svg","/icons/python-icon.svg","/icons/pytorch-icon.svg","/icons/reactjs-icon.svg","/icons/redis-icon.svg","/icons/tailwindcss-icon.svg","/icons/tensorflow-icon.svg","/icons/typescriptlang-icon.svg","/icons/x-icon.svg","/_astro/BlogPost.BLRD6eaA.js","/_astro/button.DD7gK11F.js","/_astro/client.BpsBl9sG.js","/_astro/createLucideIcon.Z1SZlEpJ.js","/_astro/Gallery.CcgMpiDM.js","/_astro/hoisted.D-2wbxhY.js","/_astro/index.-PMHX8bj.js","/_astro/index.BiFHKRHA.js","/_astro/index.Dve5_t-8.js","/_astro/index.YD8_icbL.js","/_astro/jsx-runtime.B1YlcU0w.js","/_astro/motion.R2eqhElE.js","/_astro/ProfileIcon.fmsbj0DD.js","/_astro/ProjectCard.zzi6jank.js","/_astro/react-icons.esm.CZ14-MIN.js","/_astro/ResponsiveNav.B8k7TNrO.js","/_astro/ThemeCustomizer.BNPC5t9i.js","/_astro/ViewCounter.Cy-1uVfc.js","/creating/index.html","/dummy/index.html","/gallery/index.html","/resource/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"yJr4l2UPFr8PvGI0ThTzsRdjrt/js7AgD4uRWtmGZnM=","experimentalEnvGetSecretEnabled":false});

export { manifest };
