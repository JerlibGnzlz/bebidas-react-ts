import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeServices"
import type { Categories, Drink, Drinks, SerchFilter } from "../types"


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
    const selectRecipe = await getRecipesById(id)
    console.log(selectRecipe)
    set({

    })
  }
})