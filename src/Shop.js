import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import AddItem from "./AddItem.js";
import ItemsList from "./ItemsList.js";

export default function Shop() {
  const [items, setItems] = useState(() => {
    if (localStorage.getItem("items")) {
      return JSON.parse(localStorage.getItem("items"));
    } else {
      return [];
    }
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (name !== "" && desc !== "") {
      setItems([...items, { id: uuid(), name: name, desc: desc }]);
      setName("");
      setDesc("");
    } else {
      alert("Заполнены не все поля");
    }
  }

  function handleItemDelete(item) {
    const newItems = items.filter((i) => i !== item);
    setItems(newItems);
  }

  return (
    <>
      {items.length > 0 ? (
        <h2>{items.length} товаров</h2>
      ) : (
        <h2>Товары отсутствуют</h2>
      )}
      <AddItem
        name={name}
        desc={desc}
        onFormSubmit={handleFormSubmit}
        onSetName={setName}
        onSetDesc={setDesc}
      />

      <div>
        {items.length === 0 && (
          <p className="ui-title">Добавьте первый товар</p>
        )}
      </div>
      <ItemsList items={items} onItemDelete={handleItemDelete} />
    </>
  );
}
