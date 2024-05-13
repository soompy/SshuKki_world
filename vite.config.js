import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactImages from 'vite-plugin-react-images';

export default defineConfig({
  plugins: [
    reactRefresh(),
    reactImages(), 
  ],  
});
