import { serve } from "@hono/node-server";
import app from "./02-hono.ts";

serve({ fetch: app.fetch, port: 3000 });
console.log("Sunucu calisiyor: http://localhost:3000");