import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"

type Category = {
}

export type recipeSliceType = {
  categories: Category[]
  fectCategories: () => Promise<void>
}

export const createRecipeSlice: StateCreator<recipeSliceType> = () => ({
  categories: [],
  fectCategories: async () => {
    getCategories()
  }
})