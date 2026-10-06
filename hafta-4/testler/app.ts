import { Hono } from "hono";
const app = new Hono();

const prices: Record<string, number> = {
  THYAO: 285.5,
  ASELS: 72.3,
  TUPRS: 164.8,
};

app.get("/fiyat/:sembol", (c) => {
    const sembol = c.req.param("sembol").toUpperCase();
    const fiyat = prices[sembol];

    if (fiyat !== undefined) {
        return c.json({ sembol: sembol, fiyat: fiyat });
    }
    return c.text("fiyat bulunamadi", 404);
});

interface Mum {
  tarih: string;
  kapanis: number;
}

const mumlar: Mum[] = [
  { tarih: "2026-10-01", kapanis: 285.5 },
  { tarih: "2026-10-02", kapanis: 288.2 },
  { tarih: "2026-10-03", kapanis: 283.9 },
];

app.get("/mumlar", (c) => c.json(mumlar));

export default app;