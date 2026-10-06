import { test, expect } from "vitest";
import app from "./app.ts";

test("THYAO istenince 200 donmeli", async () => {
    const cevap = await app.request("/fiyat/THYAO");
    expect(cevap.status).toBe(200);
});

test("XYZ istenince 404 donmeli", async () => {
    const cevap = await app.request("/fiyat/XYZ");
    expect(cevap.status).toBe(404);
});

test("kucuk harfle thyao istenince de 200 donmeli", async () => {
    const cevap = await app.request("/fiyat/thyao");
    expect(cevap.status).toBe(200);
});

test("/mumlar 3 mum dondurmeli", async () => {
    const cevap = await app.request("/mumlar");
    const veri = await cevap.json();
    expect(veri.length).toBe(3);
});