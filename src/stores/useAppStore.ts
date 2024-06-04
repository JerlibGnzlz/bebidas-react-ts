import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipeSlice, recipeSliceType } from "./recipeSlice"
import { createFavoritesSlice, favoritesSlice } from "./favoritesSlice";


export const useAppStore = create<recipeSliceType & favoritesSlice>()(devtools((...a) => ({
  ...createRecipeSlice(...a),
  ...createFavoritesSlice(...a)
})))
