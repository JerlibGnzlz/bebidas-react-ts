import { create } from "zustand"
import { createRecipeSlice, recipeSliceType } from "./recipeSlice"


export const useAppStore = create<recipeSliceType>((...a) => ({
  ...createRecipeSlice(...a)
}))