import { z } from "zod";
import { categoriesApiResponseSchema } from "../utils/recipeSchema";

export type Categories = z.infer<typeof categoriesApiResponseSchema>