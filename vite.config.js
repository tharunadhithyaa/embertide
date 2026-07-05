import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: 'index.html',
        menu: 'menu.html',
        about: 'about.html',
        gallery: 'gallery.html',
        reservations: 'reservations.html',
        contact: 'contact.html',
      },
    },
  },
});
