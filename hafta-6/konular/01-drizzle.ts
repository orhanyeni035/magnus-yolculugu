import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, text, numeric, timestamp } from "drizzle-orm/pg-core";

const mumlar = pgTable("mumlar", {
    zaman: timestamp("zaman", { withTimezone: true }).notNull(),
    sembol: text("sembol").notNull(),
    fiyat: numeric("fiyat"),
});

process.loadEnvFile();
const db = drizzle(process.env.DATABASE_URL as string);

const satirlar = await db.select().from(mumlar);
console.log(satirlar);
process.exit(0);