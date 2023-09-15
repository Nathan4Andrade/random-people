/* import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;
export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
}); */

import pg from "pg";

const { Pool } = pg;

const db = new Pool({
  host: "bubble.db.elephantsql.com/",
  port: 5432,
  user: "ltbpiqik", // seu user
  password: "FQ5Ad7xkNSgwUZ50rgqx1OIb9dH5pJjB", // sua senha
  database: "ltbpiqik",
});

export { db };
