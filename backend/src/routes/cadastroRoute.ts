import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Cadastro } from "../services/Cadastro";
import { cadastrar, cadastroSchema } from "../types/typeCadastro";


export async function rotaCadastro(app: FastifyInstance) {
    app.post('/cadastro', async (req: FastifyRequest, reply: FastifyReply) => {
        const bodyParsed: cadastrar = cadastroSchema.parse(req.body);
        req.headers.authorization
        return new Cadastro().create(bodyParsed);
    });

    app.get('/cadastro', async (req: FastifyRequest, reply: FastifyReply) => {
        return new Cadastro().getAll();
    });

    app.patch('/cadastro/:id', async (req: FastifyRequest, reply: FastifyReply) => {
        const instanceService = new Cadastro();
        const {id} = req.params as {id: string}
        const body: cadastrar = req.body as cadastrar;
        return await instanceService.update(body, id);
    });

    app.delete('/cadastro/:id', async (req: FastifyRequest, reply: FastifyReply) => {
        const instanceService = new Cadastro();
        const {id} = req.params as {id: string};
        return await instanceService.delete(id);
    });

}