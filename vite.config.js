import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ticket_booking_bs_layout/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        activity: resolve(__dirname, "pages/activity.html"),
        detail: resolve(__dirname, "pages/detail.html"),
        login: resolve(__dirname, "pages/login.html"),
        payment: resolve(__dirname, "pages/payment.html"),
        payment02: resolve(__dirname, "pages/payment02.html"),
        payment03: resolve(__dirname, "pages/payment03.html"),
      },
    },
    outDir: resolve(__dirname, "dist"),
  },
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "/index.html",
  },
});
