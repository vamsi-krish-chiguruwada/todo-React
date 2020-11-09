import React from "react";
import './TodoItemIcon.css';
import PendingIcon from "../../Assects/Images/radio_button_unchecked-24px.svg";
import CompletedIcon from "../../Assects/Images/radio_button_checked-24px.svg";

const TodoItemIcon = (props)=> {
  return (
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
  );
}
export default TodoItemIcon;