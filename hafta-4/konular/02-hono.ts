import { Hono } from "hono";


const app = new Hono();

app.get("/", (c) => c.text("Ana sayfa"));
app.get("/fiyat", (c) => c.json({hisse: "AAPL", fiyat: 333.69}));


app.get("/hisse/:sembol", (c) => {
    const sembol = c.req.param("sembol");
    return c.text("Istenen hisse: " + sembol);
});

const fiyatlar: Record<string, number> = {
    AAPL: 333.69,
    MSFT: 512.4,
    GOOG: 251.3,
};

app.get("/son-fiyat/:sembol", (c) => {
    const sembol = c.req.param("sembol").toUpperCase();
    const fiyat = fiyatlar[sembol];

    if (fiyat !== undefined) {
        return c.json({ sembol: sembol, fiyat: fiyat });
    }
    return c.text("Hisse bulunamadi", 404);
});

interface mum { 
    tarih : string;
    kapanis : number;
} 

const mumlar : mum [] =[
    { tarih: "2026-09-28", kapanis: 338.4 },
    { tarih: "2026-09-29", kapanis: 329.4 },
    { tarih: "2026-09-30", kapanis: 333.02 },
];
app.get("/mumlar", (c) => c.json (mumlar) );

  export default app;