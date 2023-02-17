import React from "react";
import Item from "./Item.js";

export default function ItemsList(props) {
  return (
    <ul className="ui-list">
      {props.items.map((item) => (
        <li className="ui-item-list" key={item.id}>
          <Item info={item} />
          <button
            className="item-button"
            onClick={() => props.onItemDelete(item)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
