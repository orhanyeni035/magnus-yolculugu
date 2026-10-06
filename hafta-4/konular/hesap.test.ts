import { test, expect } from "vitest";
import { getiri } from "./hesap.ts";

test("100'den 105'e çıkınca getiri 5 olmalı", () => {
    expect(getiri(100, 105)).toBe(5);
});
test("200'den 190'a düşünce getiri −5 olmalı.", () => {
    expect(getiri(200,190 )).toBe(-5);
});