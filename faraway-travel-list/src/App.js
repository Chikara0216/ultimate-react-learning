import React, { useEffect, useState } from 'react';
import { Logo } from './components/Logo';
import { Form } from './components/Form';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';

import { initialItems } from './mocks/items';

const LOCAL_STORAGE_KEY = "packingListItems";

function App() {
  // const [items, setItems] = useState(initialItems); // Works without StrictMode, otherwise it will overwrite the localStorage on app reload
  // Using lazy initialization to initialize state with localStorage data
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedItems || initialItems; // Use localStorage if available, otherwise initialItems
  });

  // Load items from local storage or initialItems on mount
  useEffect(() => {
    const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedItems) {
      // If items are found in local storage, set them to the state
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save items to local storage whenever the 'items' state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const handleToggleItem = (id) => {
    setItems((items) => items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleClearList = () => {
    const clearConfirmed = window.confirm('Are you sure you want to delete all items in your packing list?');
    if (clearConfirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        checkboxHandler={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
