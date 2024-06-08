import { resolve } from 'node:path';

import react from '@vitejs/plugin-react-swc';
import crypto from 'crypto';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: (name, filename, css) => {
        const componentName = filename
          .replace(/\.\w+$/, '')
          .split('/')
          .splice(-2)
          .shift();

        const hash = crypto.createHash('md5').update(css).digest('hex').substring(0, 5);

        console.log(crypto.createHash('md5').update(css).digest('base64').substring(0, 5));

        return `${componentName}__${name}_${hash}`;
      }
    }
  }
});
