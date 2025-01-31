// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    umami({
      id: "3ce380a0-dbdf-4f18-8a30-116a39dbb0e7",
      endpointUrl: "https://umami.z0x.ca",
    }),
  ],
  build: {
    format: 'file'
  },
});