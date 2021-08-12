export default function Item(props) {
  return (
    <div>
      <li key={props.id}>
        <input type="checkbox" acquired={props.acquired} />
        <label>{props.name}</label>
        <label> {props.price}:-</label>
        <img src={props.pictureURL} alt={props.name} />
      </li>
    </div>
  );
}
