import React from "react";
import Logo from "../../Assects/Images/arrow_drop_down-black-18dp.svg";
import "./TodoSearchArea.css";

const TodoSearchArea = (props) => {
  return (
    <div className="TodoSearchArea">
      <div onClick={props.selectAllTodosHandler} className="TodoSearchArea__icon">
        {props.totalCount ? <img src={Logo} alt="\/" /> : null}
      </div>
      <form className="TodoSearchArea__form" onSubmit={props.inputSubmitHandler}>
        <input
          className="TodoSearchArea__input"
          type="text"
          placeholder="What needs to be done ?"
          onChange={props.inputChangeHandler}
          value={props.inputText}
        ></input>
      </form>
    </div>
  );
};
export default TodoSearchArea;
