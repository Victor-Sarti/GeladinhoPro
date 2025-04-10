import fastify from "fastify";
import { rotaCadastro } from "./routes/cadastroRoute";

const app = fastify();

app.listen({port: 5000}, async (err, address) => {
    if(err) {
        app.log.error(err);
        process.exit(1);
    }   console.log("SERVER RUNNING ON" + address);
});


app.register(rotaCadastro);