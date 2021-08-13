export default function AddItemForm() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" required id="price" />
        </div>
        <div>
          <label htmlFor="picture">Item picture</label>
          <input type="url" required id="picture" />
        </div>
        <div>
          <button>Add Item</button>
        </div>
      </form>
    </div>
  );
}
