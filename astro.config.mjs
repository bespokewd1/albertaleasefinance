import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // update me!
  site: "https://www.yourwebsite.com",

  integrations: [
      icon(),
      sitemap({
          filter: (page) => !page.includes("/admin") && !page.includes("/og-image"),
          changefreq: "weekly",
          priority: 0.7,
      }),
	],

  image: {
      layout: "constrained",
	},

  fonts: [
      {
          provider: fontProviders.google(),
          name: "Roboto",
          cssVariable: "--font-primary",
          fallbacks: ["Arial", "sans-serif"],
          weights: [400, 700, 900],
          styles: ["normal"],
      },
      {
          provider: fontProviders.google(),
          name: "Fraunces",
          cssVariable: "--font-display",
          fallbacks: ["Georgia", "serif"],
          weights: [400, 500, 600, 700, 900],
          styles: ["normal", "italic"],
      },
      {
          provider: fontProviders.google(),
          name: "Manrope",
          cssVariable: "--font-body",
          fallbacks: ["system-ui", "sans-serif"],
          weights: [300, 400, 500, 600, 700, 800],
          styles: ["normal"],
      },
      {
          provider: fontProviders.google(),
          name: "JetBrains Mono",
          cssVariable: "--font-mono",
          fallbacks: ["ui-monospace", "monospace"],
          weights: [400, 500, 700],
          styles: ["normal"],
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
