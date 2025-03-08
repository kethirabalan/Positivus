import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';

export default defineConfig({
  site: "https://positivustheme.vercel.app", // You can update this if you're moving fully to Firebase
  integrations: [tailwind()],
  output: 'server',
  adapter: node({ mode: 'middleware' }),  // Use the Node adapter in middleware mode
});
