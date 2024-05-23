import { BrowserRouter, Routes, Route } from "react-router-dom"
import { IndexPage } from "./views/IndexPage"
import { FavoritosPage } from "./views/FavoritosPage"
import Layouts from "./layouts/Layouts"


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />} >
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavoritosPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
