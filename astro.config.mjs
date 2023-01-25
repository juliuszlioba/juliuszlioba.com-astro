import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({
    compat: true
  }), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })]
});