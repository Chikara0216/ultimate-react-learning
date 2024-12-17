const Item = ({ item, onDeleteItem, checkboxHandler }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        checked={item.packed}
        onChange={() => checkboxHandler(item.id)}
      />
      <span
        style={item.packed ? { textDecoration: "line-through", opacity: "0.5" } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  )
}

export default Item;
