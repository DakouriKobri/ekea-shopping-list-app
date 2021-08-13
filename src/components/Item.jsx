import { useContext } from "react";
import AcquiredContext from "../store/acquired-context";

export default function Item(props) {
  const acquiredContextObject = useContext(AcquiredContext);

  const itemIsAcquired = acquiredContextObject.itemIsAcquired(props.id);

  function toggleAcquiredStatusHandler() {
    if (itemIsAcquired) {
      acquiredContextObject.removeAcquired(props.id);
    } else {
      acquiredContextObject.addAcquired({
        id: props.id,
        name: props.name,
        price: props.price,
        picture: props.picture,
      });
    }
  }

  return (
    <div>
      <li key={props.id}>
        <input
          type="checkbox"
          id={props.id}
          onChange={toggleAcquiredStatusHandler}
          checked={props.acquire}
          value={props.acquire}
        />
        <label>{props.name}</label>
        <label> {props.price}:-</label>
        <img src={props.pictureURL} alt={props.name} />
      </li>
    </div>
  );
}
