import { z } from "zod";
import { categoriesApiResponseSchema, schemaFilterSchema } from "../utils/recipeSchema";

export type Categories = z.infer<typeof categoriesApiResponseSchema>

export type SerchFilter =z.infer<typeof schemaFilterSchema>