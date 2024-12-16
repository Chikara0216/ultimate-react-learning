import { useState } from "react";

export const Form = () => {
  // Need to set these state varaibles as values of the form elements to make them controlled
  const [description, setDescription] = useState(""); // React controls the input field's value and always sets it to the state variable's value - hence controlled element
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!description || !quantity) return;

    const newItemToAdd = {
      id: Date.now(),
      description,
      quantity: quantity,
      packed: false
    };

    console.log(newItemToAdd)

    // Reset form values
    setDescription('');
    setQuantity(1);
  };

  /* If onClick event handler was added to the button instead of the form,
  it would only work on clicking the button, and not on pressing enter.
  So, we'll instead listen for the onSubmit event. */

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 💼</h3>
      <select
        name="items-quantity-dropdown"
        id="itemsQuantityDropdown"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item name..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
