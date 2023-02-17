import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="name">Название товара</label>
        <input
          type="text"
          id="name"
          placeholder="Название товара"
          className="ui-textfield"
          value={props.name}
          onChange={(e) => props.onSetName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="desc">Описание товара</label>
        <input
          type="text"
          id="desc"
          placeholder="Описание товара"
          className="ui-textfield"
          value={props.desc}
          onChange={(e) => props.onSetDesc(e.target.value)}
        />
      </div>
      <div className="form-footer">
        <div className="validation"></div>
        <input type="submit" className="ui-button" value="Добавить" />
      </div>
    </form>
  );
}
