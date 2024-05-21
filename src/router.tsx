import { BrowserRouter, Routes,Route } from "react-router-dom"
import { IndexPage } from "./views/IndexPage"
import { FavoritosPage } from "./views/FavoritosPage"


export const AppRouter = () => {
  return (
   <BrowserRouter>
   <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/favoritos" element={<FavoritosPage/>}/>

       
   </Routes>
   </BrowserRouter>
  )
}
