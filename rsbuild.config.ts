import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'federation_consumer',
      remotes: {
        federation_provider:
          'federation_provider@http://localhost:3000/mf-manifest.json',
      },
    }),
  ],
  server: {
    port: 2000,
  },
});
