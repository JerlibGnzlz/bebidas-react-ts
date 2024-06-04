import { StateCreator } from "zustand"
import { Recipe } from "../types"


export type favoritesSlice = {
    favorites: Recipe[]
}


export const createFavoritesSlice: StateCreator<favoritesSlice> = () => ({

    favorites: []
})