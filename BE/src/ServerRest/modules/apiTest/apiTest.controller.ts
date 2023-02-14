import { Request, Response } from "express";
import { PrismaClient as PrismaClient1 } from "../../../../prisma/generated/client1";
const client1 = new PrismaClient1();

import { PrismaClient as PrismaClient2 } from "../../../../prisma/generated/client2";
const client2 = new PrismaClient2();

export const apiTestDb1 = async (req: Request, res: Response) => {
  console.log("Sono nel Controller apiTest 1");
  await client1.utenti
    .findMany({
      where: {
        id: 90,
      },
    })
    .then((data) => {
      res.json(data);
    });
};

export const apiTestDb2 = async (req: Request, res: Response) => {
  console.log("Sono nel Controller apiTest 1 ma da altro db");
  await client2.grafo_gsfi
    .findUnique({
      where: {
        id_master: 10704,
      },
    })
    .then((data) => {
      res.json(data);
    });
};
