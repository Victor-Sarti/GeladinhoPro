import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Geladinho } from "../services/Geladinho";
import { geladinhoSchema, patchGeladin } from "../types/typeGeladinho";

export async function rotaGeladinho(app: FastifyInstance) {
    app.addHook('preHandler', async (req:FastifyRequest, reply: FastifyReply) => {
             try{
            await req.jwtVerify();
        }catch(err) {
            return reply.status(401).send({err, message: "erro ao autenticar."});
        }
    });
    app.post('/geladinho', async (req:FastifyRequest, reply: FastifyReply) => {
        const instanceService = new Geladinho();
        const bodyParsed = geladinhoSchema.parse(req.body);
        return await instanceService.create(bodyParsed);
    });
    app.get('/geladinho', async (req:FastifyRequest, reply: FastifyReply) => {
        const instanceService = new Geladinho();
        return await instanceService.getAll();
    });
    app.patch('/geladinho/:id', async (req:FastifyRequest, reply: FastifyReply) => {
        const instanceService = new Geladinho();
        const {id} = req.params as {id: string}
        const body: patchGeladin = req.body as patchGeladin;
        return await instanceService.update(body, Number(id));
    });
    app.delete('/geladinho/:id', async (req:FastifyRequest, reply: FastifyReply) => {
        const instanceService = new Geladinho();
        const { id } = req.params as {id: string}
        return await instanceService.delete(Number(id));
    });
}