import { StateCreator } from "zustand"

type Category = {
}

export type recipeSliceType = {
  categories: Category[]
}

export const createRecipeSlice: StateCreator<recipeSliceType> = () => ({
  categories: []
})