import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

const DrinkCard = ({ drink }: DrinkCardProps) => {
    return (
        <div>
            <h1>{drink.strDrink}</h1>
        </div>
    )
}

export default DrinkCard
