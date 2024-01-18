import { defineConfig } from 'astro/config';
import htmx from "astro-htmx";
// https://astro.build/config
export default defineConfig({
i18n: {
    defaultLocale: "ko",
    locales: ["en", "es", "pt-br","ko"]
  },
 integrations: [htmx()],
 output: "server"
})

