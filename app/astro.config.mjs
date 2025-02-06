// @ts-check
import { defineConfig } from "astro/config";
import dynamicImport from "astro-dynamic-import";
import { transformerNotationDiff } from "shiki-transformers";

import unoCSS from "unocss/astro";

import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [unoCSS({
    injectReset: true,
  }), dynamicImport(), mdx(), vue()],
  redirects: {
    "/docs": {
      status: 302,
      destination: "/docs/introduction",
    },
    "/preset": {
      status: 302,
      destination: "/preset/introduction",
    },
    "/components": {
      status: 302,
      destination: "/components/accordion",
    },
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      transformers: [transformerNotationDiff()],
    },
  },
  output: "static",
});