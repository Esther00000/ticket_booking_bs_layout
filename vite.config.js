import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ticket_booking_bs_layout/",
  build: {
    outDir: resolve(__dirname, "dist"),
  },
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "/index.html",
  },
});
