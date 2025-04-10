import { string, z } from "zod";


export const cadastroSchema = z.object({
    nome: string(),
    sobrenome: string(),
    email: string().email(),
    senha: string()
});

export type cadastrar = z.infer<typeof cadastroSchema>;