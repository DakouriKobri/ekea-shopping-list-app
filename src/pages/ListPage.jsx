import { useHistory } from "react-router";

import PendingItemList from "../components/PendingItemList";
import AcquiredItemList from "../components/AcquiredItemList";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Baggebo Skap",
    price: 349,
    acquired: false,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/baggebo-skap-med-vitrindoerrar-metall-vit__0981557_pe815393_s5.jpg?f=xl",
  },
  {
    id: 2,
    name: "Lommarp TV Bänk",
    price: 2795,
    acquired: false,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/lommarp-tv-baenk-moerk-blagroen__0739335_pe741696_s5.jpg?f=xl",
  },
  {
    id: 3,
    name: "Ivar Skap",
    price: 699,
    acquired: false,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/ivar-skap-furu__21439_pe106384_s5.jpg?f=xl",
  },
  {
    id: 4,
    name: "Malm Sängstomme",
    price: 1295,
    acquired: true,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/malm-saengstomme-hoeg-vit__0637620_pe704551_s5.jpg?f=xl",
  },
  {
    id: 5,
    name: "Markus Kontorsstol",
    price: 1695,
    acquired: true,
    pictureURL:
      "https://www.ikea.com/se/sv/images/products/markus-kontorsstol-vissle-moerkgra__0724714_pe734597_s5.jpg?f=xl",
  },
];

export default function ListPage() {
  const history = useHistory();

  function goToForm() {
    history.push("/new-item-form");
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <PendingItemList items={DUMMY_DATA} />
      <button onClick={goToForm}>Add Item</button>
      <AcquiredItemList items={DUMMY_DATA} />
    </div>
  );
}
