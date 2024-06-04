import { StateCreator } from "zustand"
import { Recipe } from "../types"


export type favoritesSlice = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoritesExist: (id: Recipe["idDrink"]) => boolean
}


export const createFavoritesSlice: StateCreator<favoritesSlice> = (set, get) => ({

    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favoritesExist(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state => ({
                favorites: [...state.favorites, recipe]
            }))
            )
        }
    },

    favoritesExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})