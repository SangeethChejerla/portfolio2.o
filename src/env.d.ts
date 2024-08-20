/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly POSTGRES_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
