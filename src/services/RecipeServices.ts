import axios from "axios"
import { categoriesApiResponseSchema } from "../utils/recipeSchema"
import { SerchFilter } from "../types"

export const getCategories = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  const { data } = await axios(url)
  const resultado = categoriesApiResponseSchema.safeParse(data)

  if (resultado.success) {
   return resultado.data
  }
}

export const getRecipes=async(filters:SerchFilter)=>{
const url= `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
const {data}=await axios(url)

}