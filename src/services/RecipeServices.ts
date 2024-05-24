import axios from "axios"
import { categoriesApiResponseSchema } from "../utils/recipeSchema"

export const getCategories = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  const { data } = await axios.get(url)
  const resultado = categoriesApiResponseSchema.safeParse(data)

  console.log(resultado.data?.drinks)
}