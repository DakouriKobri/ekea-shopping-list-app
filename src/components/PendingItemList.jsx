import Item from "./Item";

export default function PendingItemList(props) {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
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
