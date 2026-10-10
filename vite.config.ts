import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

function stripeApiDevPlugin(): Plugin {
  return {
    name: "stripe-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/stripe")) {
          return next();
        }

        if (req.url === "/api/stripe/config" && req.method === "GET") {
          try {
            const { getStripeConfig } = await import("./server/stripe.ts");
            const config = getStripeConfig();
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                publishableKey: config.publishableKey,
                isConfigured: config.isConfigured,
              })
            );
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: err.message }));
          }
          return;
        }

        if (
          req.url?.startsWith("/api/stripe/session-status") &&
          req.method === "GET"
        ) {
          try {
            const urlObj = new URL(req.url, "http://localhost:7000");
            const sessionId = urlObj.searchParams.get("session_id");
            if (!sessionId) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "session_id requis" }));
              return;
            }
            const { getSessionDetails } = await import("./server/stripe.ts");
            const details = await getSessionDetails(sessionId);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(details));
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: err.message }));
          }
          return;
        }

        if (
          req.url === "/api/stripe/create-checkout-session" &&
          req.method === "POST"
        ) {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body || "{}");
              const { createCheckoutSession } = await import("./server/stripe.ts");
              const origin = `${req.headers["x-forwarded-proto"] || "http"}://${req.headers.host}`;
              const session = await createCheckoutSession({
                ...data,
                origin: data.origin || origin,
              });
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(session));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: err.message || "Erreur Stripe" }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), stripeApiDevPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 7000,
    host: true,
  },
});
