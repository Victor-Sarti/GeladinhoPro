import { produto } from "../types/typeProduto";
import { prisma } from "../utilities/dbClient";

class Produto {
    async create(body: produto) {
        const query = await prisma.produto.create({
            data: {
                nome: body.nome,
                quantidade: body.quantidade,
                valor: body.valor,
                idGeladinho: body.idGeladinho
            }
        });
        return query;
    }
    async getAll() {
        const query = await prisma.produto.findMany();
        return query;
    }
    async update(body: produto , id: number) {
        const data = await prisma.produto.update({
            where: {
                id: id
            },
            data: {
                nome: body.nome,
                quantidade: body.quantidade,
                valor: body.valor,
                idGeladinho: body.idGeladinho
            }
        });
        return {message: "updated!", data}
    }
    async delete(id: number) {
        const execute = await prisma.produto.delete({
            where: {
                id: id
            }
        });
        return {message: "successfully deleted!"}
    }
}

export { Produto }