import { nanoid } from 'nanoid';

export const initialItems = [
  { id: nanoid(), description: "Passports", quantity: 2, packed: false },
  { id: nanoid(), description: "T-shirts", quantity: 5, packed: true },
  { id: nanoid(), description: "Sandals", quantity: 1, packed: false },
  { id: nanoid(), description: "Camera", quantity: 1, packed: false },
  { id: nanoid(), description: "Laptop", quantity: 1, packed: false },
  { id: nanoid(), description: "Charging cables", quantity: 3, packed: false }
];
