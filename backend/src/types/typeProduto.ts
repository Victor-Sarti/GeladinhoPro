import { number, string, z } from "zod";

export const produtoSchema = z.object({
    id: number().int().optional(),
    nome: string(),
    quantidade: number(),
    valor: z.union([
        z.number(),
        z.string().transform((val) => parseFloat(val)),
    ]),
    idGeladinho: number()

});

export type produto = z.infer<typeof produtoSchema>;