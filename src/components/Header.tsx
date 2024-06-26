import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";




export const Header = () => {

  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: ""
  });


  const { pathname } = useLocation()

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fectCategories = useAppStore((state) => state.fectCategories)
  const categories = useAppStore((state) => state.categories)
  const searchRecipes = useAppStore((state) => state.searchRecipes)

  useEffect(() => {
    fectCategories()
  }, [])


  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //TODO:VALIDAR
    if (Object.values(searchFilters).includes("")) {
      console.log("todos los campos son requeridos")
      return
    }
    searchRecipes(searchFilters)
  }

  return (
    <header className={isHome ? "bg-[url('../../public/bg.jpg')] bg-center bg-cover" : "bg-slate-800"}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="../../public/logo.svg" alt="logotipo" />
          </div>

          <nav className=" flex gap-4">
            <NavLink className={({ isActive }) =>
              isActive ? "text-orange-600 uppercase font-bold" : "text-white uppercase font-bold"}
              to={"/"} >Inicio</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "text-orange-600 uppercase font-bold" : "text-white uppercase font-bold"}
              to={"/favoritos"} >Favoritos</NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label className="block text-white uppercase font-extrabold text-lg" htmlFor="ingredient">Nombre de Ingredientes</label>
            </div>

            <input className="p-3 w-full rounded-lg focus:outline-none"
              placeholder="Nombre o Ingredientes"
              type="text"
              id="ingredient"
              name="ingredient"
              onChange={handleChange}
              value={searchFilters.ingredient}
            />


            <div className="space-y-4">
              <label className="block text-white uppercase font-extrabold text-lg" htmlFor="category">Categoria</label>
            </div>

            <select
              className="p-3 w-full rounded-lg focus:outline-none"
              id="category"
              name="category"
              onChange={handleChange}
              value={searchFilters.category}
            >
              <option value="">-- Seleccione --</option>
              {categories.drinks.map(category => (
                <option
                  key={category.strCategory}
                  value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </select>

            <input
              className="cursor-pointer font-extrabold text-white bg-orange-700 hover:bg-orange-800 w-full rounded-md uppercase p-2"
              type="submit"
              value="Buscar Recetas"
            />
          </form>
        )}
      </div>
    </header >
  )
}

