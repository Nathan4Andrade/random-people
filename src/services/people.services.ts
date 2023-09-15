import { peopleRepository } from "../repositories/people.repository";
import { People } from "protocols/people";

async function getPeople(): Promise<People> {
  const max = Number(await peopleRepository.getQuantity());
  const randomId = getRandom(1, max);
  const people = await peopleRepository.getPeople(randomId);
  return people;
}

function getRandom(min: number, max: number) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const peopleService = { getPeople };
