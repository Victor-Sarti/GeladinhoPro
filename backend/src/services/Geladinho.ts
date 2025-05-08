import { geladinho, patchGeladin } from "../types/typeGeladinho";
import { prisma } from "../utilities/dbClient"

class Geladinho {
    async create(body: geladinho) {
        const query = await prisma.geladinho.create({
            data: {
                sabor: body.sabor,
                quantidade: body.quantidade,
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
    async update(body: patchGeladin, id: number) {
    
        const query = await prisma.geladinho.update({
            where: {
                id: id
            },
            data: {
                sabor: body.sabor,
                quantidade: body.quantidade,
                valor: body.valor
            }
        });
        return {message: "Updated!", query}
    }
    async delete(id: number) {
        const query = await prisma.geladinho.delete({
            where: {
                id: id
            }
        });
        return {message: "successfully deleted!"}
    }
}

export { Geladinho }