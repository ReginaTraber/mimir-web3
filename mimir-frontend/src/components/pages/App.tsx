import { useEffect, useState } from "react";
import { Card } from "../../models/Card";
import { CardList } from "../widgets/CardList";
import { fetchCards } from "../../api/api";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    (async () => {
      const dto = await fetchCards();
      setCards(dto);
    })();
  }, []);

  return (
    <>
      <CardList cards={cards} />
    </>
  );
}

export default App;
