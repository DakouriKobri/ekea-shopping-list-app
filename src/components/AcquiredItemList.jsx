import Item from "./Item";

export default function AcquiredItemList(props) {
  /* const [items, setItems] = useState(props);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    setItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, acquire: !item.acquire };
        } else {
          return item;
        }
      })
    );
  };
 */
  return (
    <div>
      <h3>View acquired items</h3>
      <ul>
        {props.items &&
          props.items
            // .filter((item) => item.acquired === true)
            .map((item) => (
              <Item
                key={item.id}
                name={item.name}
                price={item.price}
                acquired={item.aquired}
                pictureURL={item.pictureURL}
                handleCheck={props.handleCheck}
                //handleCheck={() => handleCheck(item.id)}
              />
            ))}
      </ul>
    </div>
  );
}
