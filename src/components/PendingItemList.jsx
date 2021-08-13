import Item from "./Item";

export default function PendingItemList(props) {
  return (
    <div>
      <h3>Pending items</h3>
      <ul>
        {props.items
          .filter((item) => item.acquired === false)
          .map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              checked={item.aquired}
              pictureURL={item.pictureURL}
              handleCheck={props.handleCheck}
            />
          ))}
      </ul>
    </div>
  );
}
