import React, { useState } from "react";
// import PendingIcon from "../../Assects/Images/radio_button_unchecked-24px.svg";
// import CompletedIcon from "../../Assects/Images/radio_button_checked-24px.svg";
import CloseIcon from "../../Assects/Images/cancel-24px.svg";
import "./TodoItem.css";
import TodoItemIcon from "../TodoItemIcon/TodoItemIcon";

const TodoItem = (props) => {
  const [closeIconDisplay, setShowIconDisplay] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const handleDoubleClick = () => {
    setOnEdit(true);
    setEditText(props.text);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const editInputSubmit = (e) => {
    e.preventDefault();
    props.handleEditSubmit(props.text, editText);
    setOnEdit(false);
  };

  var customStrikeClass = "todo__text";
  if (props.checked) {
    customStrikeClass = "todo__text todo__text--strike";
  }
  return (
    <div
      onMouseEnter={() => setShowIconDisplay(true)}
      onMouseLeave={() => setShowIconDisplay(false)}
      className="TodoItem"
    >
      <TodoItemIcon checked={props.checked} toggleSellect={props.toggleSellect} text={props.text} />
      <div onDoubleClick={handleDoubleClick} className="TodoItem__todo">
        {onEdit ? (
          <form
            // onSubmit={()=>props.handleEditSubmit(props.text,editText)}
            onSubmit={editInputSubmit}
            className="TodoItem__todo"
          >
            <input
              onChange={handleEditChange}
              className="TodoItem__todo TodoItem__input"
              type="text"
              value={editText}
            />
          </form>
        ) : (
          <p className={customStrikeClass}>{props.text}</p>
        )}
      </div>
      <div onClick={() => props.removeTodo(props.text)} className="TodoItem__close iconHolder">
        {closeIconDisplay ? <img src={CloseIcon} alt={props.text} /> : null}
      </div>
    </div>
  );
};

export default TodoItem;
