import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipeSlice, recipeSliceType } from "./recipeSlice"
import { createFavoritesSlice, favoritesSlice } from "./favoritesSlice";
import { NotificateSliceType, createNotificateSlice } from './notificateSlice';


export const useAppStore = create<recipeSliceType & favoritesSlice & NotificateSliceType>()(devtools((...a) => ({
  ...createRecipeSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificateSlice(...a)

})))
