import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeServices"
import type { Categories, Drinks, SerchFilter } from "../types"


export type recipeSliceType = {
  categories: Categories
  drinks: Drinks
  fectCategories: () => Promise<void>
  searchRecipes: (serchFilter: SerchFilter) => Promise<void>
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>
}

export const createRecipeSlice: StateCreator<recipeSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  fectCategories: async () => {
    const categories = await getCategories()
    set({
      categories
    })
  },

  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters)
    set({
      drinks
    })
  },

  selectRecipe: async (id) => {
    console.log(id)
    set({

    })
  }
})