import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeServices"
import type { Categories, Drink, Drinks, Recipe, SerchFilter } from "../types"


export type recipeSliceType = {
  categories: Categories
  drinks: Drinks
  selectedRecipe: Recipe
  modal: boolean
  fectCategories: () => Promise<void>
  searchRecipes: (serchFilter: SerchFilter) => Promise<void>
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>
  closeModal: () => void
}

export const createRecipeSlice: StateCreator<recipeSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  selectedRecipe: {} as Recipe,
  modal: false,


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
    const selectedRecipe = await getRecipesById(id)
    set({
      selectedRecipe,
      modal: true
    })
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe
    })
  }
})