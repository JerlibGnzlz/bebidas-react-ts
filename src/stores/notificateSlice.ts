import { StateCreator } from "zustand"
import { favoritesSlice } from "./favoritesSlice"



type Notification = {
    text: string,
    error: boolean,
    show: boolean
}
export type NotificateSliceType = {
    notidicaction: Notification
    showNotification: (payload: Pick<Notification, "text" | "error">) => void

}

export const createFavoritesSlice: StateCreator<favoritesSlice> = (set, get) => ({})

export const createNotificateSlice: StateCreator<NotificateSliceType & favoritesSlice> = (set, get) => ({
    notidicaction: {
        text: "",
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notidicaction: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
    }
})