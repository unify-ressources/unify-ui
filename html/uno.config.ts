// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetMini,
  presetAttributify,
  presetUno,
} from "unocss";
import { presetForms } from '@julr/unocss-preset-forms'
import { flexillaPreset } from "@unifydev/flexilla"
import { presetUI } from "@unifydev/preset-ui"

import * as unocssPresetAnimations from 'unocss-preset-animations'



export default defineConfig({
  content: {
    pipeline: {
      include: ["./html-components/**/*.html", "index.html", "js/**/*.js"],
    },
  },
  theme: {
    colors: {
      bg: {
        DEFAULT: "hsl(var(--bg))",
        lighter: "hsl(var(--bg-lighter))",
        light: "hsl(var(--bg-light))",
        high: "hsl(var(--bg-high))",
        higher: "hsl(var(--bg-higher))"
      },
      fg: {
        DEFAULT: "hsl(var(--fg-text))",
        title: "hsl(var(--fg-title))",
        subtitle: "hsl(var(--fg-subtitle))",
        text: "hsl(var(--fg-text))",
        subtext: "(var(--fg-subtext))",
        light: "hsl(var(--fg-light))"
      },
      border: {
        DEFAULT: "hsl(var(--border))",
        light: "hsl(var(--border-light))",
        lighter: "hsl(var(--border-ligther))",
        high: "hsl(var(--border-high))",
        higher: "hsl(var(--border-higher))"
      },
      gray: {
        DEFAULT: "hsl(var(--neutral-600))",
        50: "hsl(var(--neutral-50))",
        100: "hsl(var(--neutral-100))",
        200: "hsl(var(--neutral-200))",
        300: "hsl(var(--neutral-300))",
        400: "hsl(var(--neutral-400))",
        500: "hsl(var(--neutral-500))",
        600: "hsl(var(--neutral-600))",
        700: "hsl(var(--neutral-700))",
        800: "hsl(var(--neutral-800))",
        900: "hsl(var(--neutral-900))",
        950: "hsl(var(--neutral-950))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary-600))",
        50: "hsl(var(--primary-50))",
        100: "hsl(var(--primary-100))",
        200: "hsl(var(--primary-200))",
        300: "hsl(var(--primary-300))",
        400: "hsl(var(--primary-400))",
        500: "hsl(var(--primary-500))",
        600: "hsl(var(--primary-600))",
        700: "hsl(var(--primary-700))",
        800: "hsl(var(--primary-800))",
        900: "hsl(var(--primary-900))",
        950: "hsl(var(--primary-950))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary-600))",
        50: "hsl(var(--secondary-50))",
        100: "hsl(var(--secondary-100))",
        200: "hsl(var(--secondary-200))",
        300: "hsl(var(--secondary-300))",
        400: "hsl(var(--secondary-400))",
        500: "hsl(var(--secondary-500))",
        600: "hsl(var(--secondary-600))",
        700: "hsl(var(--secondary-700))",
        800: "hsl(var(--secondary-800))",
        900: "hsl(var(--secondary-900))",
        950: "hsl(var(--secondary-950))",
      }
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
    presetUI({}),
    flexillaPreset(),
    unocssPresetAnimations.presetAnimations(),
  ],
});
