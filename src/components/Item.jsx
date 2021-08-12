import { useState } from "react";

export default function Item(props) {
  const [acquired, setAcquired] = useState(props.acquired);

  function handleCheck() {
    setAcquired(!acquired);
  }

  return (
    <div>
      <li key={props.id}>
        <input
          type="checkbox"
          id={props.id}
          onChange={handleCheck}
          acquired={props.acquired}
          value={props.acquired}
        />
        <label>{props.name}</label>
        <label> {props.price}:-</label>
        {/* <img src={props.pictureURL} alt={props.name} /> */}
      </li>
    </div>
  );
}
