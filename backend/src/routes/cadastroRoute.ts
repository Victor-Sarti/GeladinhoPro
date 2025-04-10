import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Cadastro } from "../services/Cadastro";
import { cadastrar, cadastroSchema } from "../types/typeCadastro";


export async function rotaCadastro(app: FastifyInstance) {
    app.post('/cadastro', async (req: FastifyRequest, reply: FastifyReply) => {
        const bodyParsed: cadastrar = cadastroSchema.parse(req.body);
        return new Cadastro().create(bodyParsed);
    });

    app.get('/cadastro', async (req: FastifyRequest, reply: FastifyReply) => {
        return new Cadastro().getAll();
    });


}