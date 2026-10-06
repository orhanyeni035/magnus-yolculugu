import { test, expect } from "vitest";
import app from "./02-hono.ts";

test("AAPL istenince 200 donmeli", async () => {
    const cevap = await app.request("/son-fiyat/AAPL");
    expect(cevap.status).toBe(200);
});

test("XYZ istenince 404 dönmeli.", async () => {
    const cevap = await app.request("/son-fiyat/XYZ");
    expect(cevap.status).toBe(404);
});

test("AAPL fiyati 333.69 olmali", async () => {
    const cevap = await app.request("/son-fiyat/AAPL");
    const veri = await cevap.json();
    expect(veri.fiyat).toBe(333.69);
});


test("/mumlar 3 mum dondurmeli", async () => {
    const cevap = await app.request("/mumlar");
    const veri = await cevap.json();
    expect(veri.length).toBe(3);
});

test("kucuk harfle aapl istenince de 200 donmeli", async () => {
    const cevap = await app.request("/son-fiyat/aapl");
    expect(cevap.status).toBe(200);
});