import { useState } from "react";

export default function Item(props) {
  const [item, setItem] = useState({ acquire: false });

  const handleCheck = (event) => {
    const acquire = event.target.checked;
    setItem({ ...item, [acquire]: !acquire });
  };

  return (
    <div>
      <li key={props.id}>
        <input
          type="checkbox"
          id={props.id}
          onChange={handleCheck}
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
