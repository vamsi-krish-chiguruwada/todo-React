import React, { useState } from "react";
import PendingIcon from "../../Assects/Images/radio_button_unchecked-24px.svg";
import CompletedIcon from "../../Assects/Images/radio_button_checked-24px.svg";
import CloseIcon from "../../Assects/Images/cancel-24px.svg";
import "./TodoItem.css";

const TodoItem = (props) => {
  const [closeIconDisplay, setShowIconDisplay] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowIconDisplay(true)}
      onMouseLeave={() => setShowIconDisplay(false)}
      className="TodoItem"
    >
      <div
        onClick={() => props.toggleSellect(props.text)}
        className="TodoItem__checkbox iconHolder"
      >
        {props.checked ? (
          <img src={CompletedIcon} alt={props.text} />
        ) : (
          <img src={PendingIcon} alt={props.text} />
        )}
      </div>
      <div className="TodoItem__todo">
        <p className="todo__text">{props.text}</p>
      </div>
      <div onClick={() => props.removeTodo(props.text)} className="TodoItem__close iconHolder">
        {closeIconDisplay ? <img src={CloseIcon} alt={props.text} /> : null}
      </div>
    </div>
  );
};

export default TodoItem;
