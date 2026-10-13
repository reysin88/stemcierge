import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://stemcierge.com',
  trailingSlash: 'always',
});
