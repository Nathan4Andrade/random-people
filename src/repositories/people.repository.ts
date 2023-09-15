import { People } from "protocols/people.js";
import { db } from "../database/database.connection.js";

async function getPeople(id: number) {
  return db.query<People>(`SELECT * FROM people WHERE "id" = $1;`, [id]);
}

async function getQuantity() {
  return db.query<number>(`SELECT COUNT(*) FROM "people"`);
}

export const peopleRepository = { getPeople, getQuantity };
