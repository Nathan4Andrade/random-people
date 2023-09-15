import { Request, Response } from "express";
import httpStatus from "http-status";
import { peopleService } from "services/people.services";

async function getPeople(req: Request, res: Response) {
  const people = await peopleService.getPeople();
  res.send(people);
}

export const peopleController = { getPeople };
