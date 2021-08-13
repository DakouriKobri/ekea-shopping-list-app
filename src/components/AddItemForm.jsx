import { useRef } from "react";

export default function AddItemForm(props) {
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const pictureInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredPicture = pictureInputRef.current.value;

    const itemData = {
      name: enteredName,
      price: enteredPrice,
      picture: enteredPicture,
    };

    props.onAddItem(itemData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" required id="price" ref={priceInputRef} />
        </div>
        <div>
          <label htmlFor="picture">Item picture</label>
          <input type="url" required id="picture" ref={pictureInputRef} />
        </div>
        <div>
          <button>Add Item</button>
        </div>
      </form>
    </div>
  );
}
