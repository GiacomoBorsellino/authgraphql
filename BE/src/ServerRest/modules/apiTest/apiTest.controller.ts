import { Request, Response } from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const apiTest = async (req: Request, res: Response) => {
    console.log('Sono nel Controller apiTest 1')
    await prisma.utenti.findMany({
        where: {
            id: 90
        }
    }).then((data) => {
        res.json(data)
    })
}