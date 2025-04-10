import { cadastrar } from "../types/typeCadastro";
import { prisma } from "../utilities/dbClient";
import { encrypts, verifys } from "../utilities/encrypt";

class Cadastro {

    async create(body: cadastrar) {

        const encryptSenha: string = await encrypts(body.senha);

        const query = await prisma.cadastro.create({
            data: {
                nome: body.nome,
                sobrenome: body.sobrenome,
                email: body.email,
                senha: encryptSenha
            }
        });
        return query;
    }

    async getAll() {
        const query = await prisma.cadastro.findMany();
        return query;
    }

}

export { Cadastro }