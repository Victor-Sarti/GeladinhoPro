import { coerce, number, string, z, ZodSchema } from "zod";
import { produtoSchema } from "./typeProduto";


export const geladinhoSchema = z.object({
    id: number().int().optional(),
    sabor: string(),
    valor: z.union([
        z.number(),
        z.string().transform((val) => parseFloat(val))
    ]),
    criadoEm: coerce.date().optional(),
    produto: z.array(z.lazy((): ZodSchema => produtoSchema)).optional()
});

export type geladinho = z.infer<typeof geladinhoSchema>;