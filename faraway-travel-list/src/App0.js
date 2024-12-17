import React, { useEffect, useState } from 'react';
import { Logo } from './components/Logo';
import { Form } from './components/Form';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';

import { initialItems } from './mocks/items';

const LOCAL_STORAGE_KEY = "packingListItems";

function App0() {
  // const [items, setItems] = useState([]); // Works without StrictMode, otherwise it will overwrite the localStorage on app reload
  // Using lazy initialization to initialize state with localStorage data
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedItems || initialItems; // Use localStorage if available, otherwise initialItems
  });

  // Load initialItems after component mounts (Can initialize state with initialItems alternatively)
  /* useEffect(() => {
    setItems(initialItems); // Populate items with initialItems
  }, []); */

  // Load items from local storage or initialItems on mount
  useEffect(() => {
    const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedItems) {
      // If items are found in local storage, set them to the state
      setItems(JSON.parse(storedItems));
    } else {
      // If no items are found in local storage, use initialItems
      setItems(initialItems);
      // Save initialItems to local storage so it persists on future reloads
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialItems));
    }
  }, []);

  // Save items to local storage whenever the `items` state changes
  useEffect(() => {
    // if (items.length > 0) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    // }
  }, [items]);

  /* ---------- BAD PRACTICE ALERT ---------- */
  /* No need to merge initialItems and items since everything is managed in a single state array. */

  // const itemsToDisplay = [...initialItems, ...items];

  /* const itemsToDisplay = useMemo(
    () => [...initialItems, ...items], // Ensure unique IDs here if needed
    [items]
  ); */

  // Combining mock data items and the items added to the state
  /* const itemsToDisplay = useMemo(
    () => [
      ...initialItems,
      ...items.filter((item) => !initialItems.some((i) => i.id === item.id)),
    ],
    [items]
  ); */

  const handleDeleteItem = (id) => {
    /* const itemsAfterDeletion = items.filter((item) => item.id !== id)
    setItems(itemsAfterDeletion) */
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const handleToggleItem = (id) => {
    setItems((items) => items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} checkboxHandler={handleToggleItem} />
      <Stats items={items} />
    </div>
  );
}

export default App0;
