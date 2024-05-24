import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";



export const Header = () => {

  const { pathname } = useLocation()

  const isHome = useMemo(() => pathname === "/", [pathname]);

  console.log(isHome)


  return (
    <header className="bg-slate-800 ">
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
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
              <label className="block text-white uppercase font-extrabold text-lg" htmlFor="ingredient">Nombre de Ingredientes</label>
            </div>

            <input className="p-3 w-full rounded-lg focus:outline-none" placeholder="Nombre o Ingredientes" type="text" id="ingredient" name="ingredient" />


            <div className="space-y-4">
              <label className="block text-white uppercase font-extrabold text-lg" htmlFor="category">Categoria</label>
            </div>

            <select

              id="category"
              className="p-3 w-full rounded-lg focus:outline-none"
              name="category" >
              <option value="">-- Seleccione --</option>
            </select>

            <input className="cursor-pointer font-extrabold text-white bg-orange-700 hover:bg-orange-800 w-full rounded-md uppercase p-2" type="submit" value="Buscar Recetas" />
          </form>
        )}
      </div>
    </header >
  );
};
