import { Request, Response } from "express";
import { db } from "../../../config/dbConfig";

export const apiTestDb1 = async (req: Request, res: Response) => {
  console.log("Sono nel Controller apiTest 1");
  await db.avr_main.utenti
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
  await db.gsfi_catasto.grafo_gsfi
    .findUnique({
      where: {
        id_master: 10704,
      },
    })
    .then((data) => {
      res.json(data);
    });
};
