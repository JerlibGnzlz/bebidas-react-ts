import { StateCreator } from "zustand"
import { Recipe } from "../types"


export type favoritesSlice = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoritesExist: (id: Recipe["idDrink"]) => boolean
    loadFromStorage: () => void

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

        localStorage.setItem("favorites", JSON.stringify(get().favorites))
    },

    favoritesExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storageFavorites = localStorage.getItem("favorites")
        if (storageFavorites) {
            set({
                favorites: JSON.parse(storageFavorites)
            })
        }
    }
})