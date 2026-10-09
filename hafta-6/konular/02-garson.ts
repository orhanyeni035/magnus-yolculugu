import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, text, numeric, timestamp } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";
import { createClient } from "redis";
import { desc } from "drizzle-orm";

const mumlar = pgTable("mumlar", {
  zaman: timestamp("zaman", { withTimezone: true }).notNull(),
  sembol: text("sembol").notNull(),
  fiyat: numeric("fiyat"),
});

process.loadEnvFile();
const db = drizzle(process.env.DATABASE_URL as string);
const redis = await createClient().connect();
const app = new Hono();

app.get("/risk/:sembol", async (c) => {
  const sembol = c.req.param("sembol").toUpperCase();

  // 1. Depodan fiyatları al
  const satirlar = await db.select().from(mumlar).where(eq(mumlar.sembol, sembol));
  const fiyatlar = satirlar.map((s) => Number(s.fiyat));

  // 2. Aşçıya gönder
  const cevap = await fetch("http://localhost:8000/risk", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fiyatlar),
  });
  const veri = await cevap.json();

  // 3. Müşteriye götür
  return c.json({ sembol: sembol, volatilite: veri.volatilite });
});

app.get("/son-fiyat/:sembol", async (c) => {
  const sembol = c.req.param("sembol").toUpperCase();
  const anahtar = "fiyat:" + sembol;

  // 1. Önce deftere bak
  const defterdeki = await redis.get(anahtar);
  if (defterdeki !== null) {
    return c.json({ sembol: sembol, fiyat: Number(defterdeki), kaynak: "redis" });
  }

  // 2. Defterde yoksa depoya in, en son fiyatı al
  const satirlar = await db.select().from(mumlar)
    .where(eq(mumlar.sembol, sembol))
    .orderBy(desc(mumlar.zaman))
    .limit(1);
  const fiyat = Number(satirlar[0].fiyat);

  // 3. Deftere yaz, 10 saniye geçerli
  await redis.set(anahtar, String(fiyat), { EX: 10 });

  return c.json({ sembol: sembol, fiyat: fiyat, kaynak: "veritabani" });
});

serve({ fetch: app.fetch, port: 3000 });
console.log("Garson calisiyor: http://localhost:3000");