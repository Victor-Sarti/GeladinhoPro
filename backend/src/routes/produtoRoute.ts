import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { produto, produtoSchema } from "../types/typeProduto";
import { Produto } from "../services/Produto";


export async function rotaProduto(app: FastifyInstance) {
    app.addHook('preHandler', async (req: FastifyRequest, reply: FastifyReply) => {
        try{
            await req.jwtVerify();
        }catch(err) {
            return reply.status(401).send({err, message: "nao autenticado."});
        }
    });
    app.post('/produto', async (req: FastifyRequest, reply: FastifyReply) => {
        const bodyParsed: produto = produtoSchema.parse(req.body);
        const instanceService = new Produto();
        return await instanceService.create(bodyParsed);
    });
    app.get('/produto', async (req: FastifyRequest, reply: FastifyReply) => {
        const instanceService = new Produto();
        return await instanceService.getAll();
    });
}