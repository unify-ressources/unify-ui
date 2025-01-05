// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetMini,
  presetAttributify,
  presetUno,
} from "unocss";
import { presetForms } from '@julr/unocss-preset-forms'
import { presetUI } from "./../../unify-preset/packages/preset-ui"

import { presetAnimations } from 'unocss-preset-animations'



export default defineConfig({
  content: {
    pipeline: {
      include: ["./html-components/**/*.html", "index.html", "js/**/*.js"],
    },
  },
  theme: {
    colors: {
      bg: {
        DEFAULT: "rgb(var(--bg-body)/ <alpha-value>)",
        lighter: "rgb(var(--bg-lighter)/ <alpha-value>)",
        light: "rgb(var(--bg-light)/ <alpha-value>)",
        high: "rgb(var(--bg-high)/ <alpha-value>)",
        higher: "rgb(var(--bg-higher)/ <alpha-value>)"
      },
      fg: {
        DEFAULT: "rgb(var(--fg-text)/ <alpha-value>)",
        title: "rgb(var(--fg-title)/ <alpha-value>)",
        subtitle: "rgb(var(--fg-subtitle)/ <alpha-value>)",
        text: "rgb(var(--fg-text)/ <alpha-value>)",
        subtext: "(var(--fg-subtext)/ <alpha-value>)",
        light: "rgb(var(--fg-light)/ <alpha-value>)"
      },
      border: {
        DEFAULT: "rgb(var(--border)/ <alpha-value>)",
        light: "rgb(var(--border-light)/ <alpha-value>)",
        lighter: "rgb(var(--border-ligther)/ <alpha-value>)",
        high: "rgb(var(--border-high)/ <alpha-value>)",
        higher: "rgb(var(--border-higher)/ <alpha-value>)"
      },
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini({
      dark: "class",
    }),
    presetForms({
      strategy: 'base', // Only add preflights and not new rules
    }),
    presetIcons({
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
      },
    }),
    presetUI({}) as any,
    presetAnimations(),
  ],
});
