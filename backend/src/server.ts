import fastify from "fastify";
import { rotaCadastro } from "./routes/cadastroRoute";
import fastifyJwt from "fastify-jwt";
import { env } from "./utilities/enviroment";
import { login } from "./routes/auth/Login";
import { rotaProduto } from "./routes/produtoRoute";
import { rotaGeladinho } from "./routes/geladinhoRoute";

const app = fastify({logger: true});

app.listen({port: 5000}, (err, address) => {
    if(err) {
        app.log.error(err);
        process.exit(1);
    }   console.log("SERVER RUNNING ON " + address);
});

app.register(fastifyJwt, {
    secret: env.SECRET
});
app.register(rotaCadastro);
app.register(login);
app.register(rotaProduto);
app.register(rotaGeladinho);