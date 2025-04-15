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
}

export { Produto }