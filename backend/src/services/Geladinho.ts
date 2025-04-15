import { geladinho } from "../types/typeGeladinho";
import { prisma } from "../utilities/dbClient"

class Geladinho {
    async create(body: geladinho) {
        const query = await prisma.geladinho.create({
            data: {
                sabor: body.sabor,
                valor: body.valor
            },
            include: {produto: true}
        });
        return query;
    }
    async getAll() {
        const query = await prisma.geladinho.findMany({
            include: {
                produto: {
                    select: {
                        nome: true,
                         valor: true
                    }
                }
            }
        });
        return query;
    }
}

export { Geladinho }