import { initialItems } from "../mocks/items";
import Item from "./Item";

export const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => <Item item={item} key={item.id} />)}
      </ul>
    </div>
  );
}
