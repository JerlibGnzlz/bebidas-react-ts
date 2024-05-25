import { z } from "zod";

export const categoriesApiResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string()
    })
  )
})


export const schemaFilterSchema= z.object({
  ingredient: z.string(),
  category: z.string()
})