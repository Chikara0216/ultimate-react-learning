const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through", opacity: "0.5" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>
        ❌
      </button>
    </li>
  )
}

export default Item;
