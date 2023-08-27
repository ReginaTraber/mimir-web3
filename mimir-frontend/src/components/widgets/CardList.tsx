import { Card } from "../../models/Card"

interface Props {
    cards: Card[]
}

export const CardList = ({
    cards
}: Props) => (
    <div>
        {JSON.stringify(cards)}
    </div>
)