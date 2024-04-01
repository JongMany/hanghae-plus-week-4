import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import Prerenderer from "@prerenderer/renderer-puppeteer";
// import Prerenderer from "@prerenderer/prerenderer";
// import JSDOMRenderer from "@prerenderer/renderer-jsdom";
import prerender from "@prerenderer/rollup-plugin";

// const prerenderer = new Prerenderer({
//   // Required - The path to the app to prerender. Should have an index.html and any other needed assets.
//   staticDir: path.join(__dirname, "app"),
//   // The plugin that actually renders the page.
//   renderer: new JSDOMRenderer(),
//   postProcess(renderedRoute) {
//     // Replace all http with https urls and localhost to your site url
//     renderedRoute.html = renderedRoute.html
//       .replace(/http:/i, "https:")
//       .replace(
//         /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
//         process.env.CI_ENVIRONMENT_URL || ""
//       );
//   },
// });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ["/", "/counter", "/otherpage/1", "/otherpage/2", "/otherpage/3"],
      renderer: "@prerenderer/renderer-puppeteer",
      server: {
        port: 3000,
        host: "localhost",
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            "https://seo-optimization-test.netlify.app/"
          );
      },
    }),
  ],
});
