import { Request, Response } from "express";
import { PrismaClient as PrismaClient1 } from "../../../../prisma/generated/client1";
const client1 = new PrismaClient1();

export const apiTest = async (req: Request, res: Response) => {
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
