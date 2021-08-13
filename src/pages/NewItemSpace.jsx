import { useHistory } from "react-router-dom";

import AddItemForm from "../components/AddItemForm";

export default function NewItemSpace() {
  const history = useHistory();

  function onAddItemHandler(itemData) {
    fetch(
      "https://ekea-shopping-list-app-default-rtdb.firebaseio.com/items.json",
      {
        method: "POST",
        body: JSON.stringify(itemData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.goBack();
    });
  }

  return (
    <div>
      <section>
        <AddItemForm onAddItem={onAddItemHandler} />
      </section>
    </div>
  );
}
