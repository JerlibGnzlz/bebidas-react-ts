import { z } from "zod";
import { categoriesApiResponseSchema, schemaFilterSchema, DrinksApiResponse, DrinkApiResponse } from '../utils/recipeSchema';

export type Categories = z.infer<typeof categoriesApiResponseSchema>

export type SerchFilter = z.infer<typeof schemaFilterSchema>

export type Drinks = z.infer<typeof DrinksApiResponse>

export type Drink = z.infer<typeof DrinkApiResponse>