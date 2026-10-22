// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE;
const base = process.env.BASE ?? '/';

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  base,
});
