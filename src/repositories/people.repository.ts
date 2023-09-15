import { People } from "protocols/people.js";
import { db } from "./../database/database.connection";

async function getPeople(id: number) {
  const people = await db.query<People>(
    `SELECT * FROM people WHERE "id" = $1;`,
    [id]
  );
  return people.rows;
}

async function getQuantity() {
  return db.query(`SELECT COUNT(*) FROM "people"`);
}

export const peopleRepository = { getPeople, getQuantity };
