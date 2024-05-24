import axios from "axios"
import { categoriesApiResponseSchema } from "../utils/recipeSchema"

export const getCategories = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  const { data } = await axios(url)
  const resultado = categoriesApiResponseSchema.safeParse(data)

  if (resultado.success) {
   return resultado.data
  }
}