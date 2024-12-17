import { useState } from "react";
import Item from "./Item";

export const PackingList = ({ items, onDeleteItem, checkboxHandler, onClearList }) => {
  const [sortBy, setSortBy] = useState('input-order');

  let sortedItems;
  if (sortBy === 'alphabetically-ascending') {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === 'alphabetically-descending') {
    sortedItems = items.slice().sort((a, b) => b.description.localeCompare(a.description));
  } else if (sortBy === 'packed-status') {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  } else {
    sortedItems = items;
  }

  return (
    <div className="list">
      {sortedItems.length > 0 ? (
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} onDeleteItem={onDeleteItem} checkboxHandler={checkboxHandler} key={item.id} />
          ))}
        </ul>
      ) : (
        "Your packing list seems a bit too empty. 🥹 Get packing already! 🥺👉👈"
      )}
      <div className="actions">
        <span>Sort by ☰</span>
        <select
          id="sort-packing-list"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="alphabetically-ascending">A–Z</option>
          <option value="alphabetically-descending">Z–A</option>
          <option value="packed-status">Packed status</option>
          <option value="input-order">Input order</option>
        </select>
        <button onClick={onClearList}>🗑️ Clear list</button>
      </div>
    </div>
  );
};
