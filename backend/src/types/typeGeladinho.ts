import { coerce, number, string, z, ZodSchema } from "zod";
import { produtoSchema } from "./typeProduto";

export const geladinhoSchema = z.object({
  id: z.union([
    z.number().int(),
    z.string().transform((val) => parseInt(val, 10))
  ]),
  sabor: string(),
  quantidade: z.union([
    z.number().int(),
    z.string().transform((val) => parseInt(val, 10))
  ]),
  valor: z.union([
    z.number(),
    z.string().transform((val) => parseFloat(val))
  ]),
  criadoEm: coerce.date().optional(),
  produto: z.array(z.lazy((): ZodSchema => produtoSchema)).optional()
});

export type geladinho = z.infer<typeof geladinhoSchema>;
export type patchGeladin = Omit<geladinho, "id" | "criadoEm" | "produto">

export const schemaCreatGeladin = z.object({
  sabor: string(),
  quantidade: z.union([
    z.number().int(),
    z.string().transform((val) => parseInt(val, 10))
  ]),
  valor: z.union([
    z.number(),
    z.string().transform((val) => parseFloat(val))
  ]),
});

export type geladinhoCreate = z.infer<typeof schemaCreatGeladin>;
