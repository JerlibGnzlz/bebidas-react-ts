import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"
import type { Categories, SerchFilter } from "../types"


export type recipeSliceType = {
  categories: Categories
  fectCategories: () => Promise<void>
  searchRecipes: (serchFilter:SerchFilter) => Promise<void>
}

export const createRecipeSlice: StateCreator<recipeSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  fectCategories: async () => {
    const categories = await getCategories()
    set({
      categories
    })
  },

  searchRecipes:async(filters)=>{
console.log(filters)
  }
})