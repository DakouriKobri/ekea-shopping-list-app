import Item from "./Item";

export default function PendingItemList(props) {
  return (
    <div>
      <h3>Pending items</h3>
      <ul>
        {props.items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            acquired={item.aquired}
            pictureURL={item.pictureURL}
          />
        ))}
      </ul>
    </div>
  );
}
