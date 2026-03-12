import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // Define o caminho base como relativo para funcionar no GitHub Pages
    base: '/', 
    
    plugins: [react(), tailwindcss()],
    
        define: {
      // O Vite busca primeiro a variável do GitHub (VITE_...) e depois a do .env local
      'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY),
    },

    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    
    server: {
      // Mantendo sua configuração original do HMR
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    
    // Otimização para garantir que o build vá para a pasta 'dist' (padrão do Vite)
    build: {
      outDir: 'dist',
    }
  };
});
