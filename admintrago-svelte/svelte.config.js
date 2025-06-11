import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  preprocess: vitePreprocess(),
  kit: {
    // Specify the adapter for deployment
    adapter: {
      name: '@sveltejs/adapter-static',
      // Options for the adapter can be specified here
      // For example, you can set a fallback for SPA
      fallback: 'index.html'
    },
    // Other kit options can be added here
  }
};