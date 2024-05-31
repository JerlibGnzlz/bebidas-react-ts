import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

const DrinkCard = ({ drink }: DrinkCardProps) => {
    return (
        <div className="border shadow-lg">
            <div className="overflow-hidden">
                <img
                    className="hover:scale-125 transition-transform hover:rotate-2"
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrinkThumb}`} />
            </div>

            <div className="p-5">
                <h1 className="text-2xl truncate font-black">{drink.strDrink}</h1>
                <button
                    type="button"
                    className="bg-orange-400 hover:bg-orange-600  uppercase p-2 rounded-md font-bold w-full text-white text-lg">
                    Ver Receta
                </button>
            </div>
        </div>
    )
}

export default DrinkCard
