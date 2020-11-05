import React from "react";
import TodoFilterButton from "../TodoFilterButton/TodoFilterButton";
import "./TodoFilter.css";

const TodoFilter = (props) => {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="TodoFilter">
      <div className="TodoFilter__pendingMsg">
        <p className="filerText">
          {props.ActiveCount} {props.ActiveCount == 1 ? "item" : "items"} left
        </p>
      </div>
      <div className="TodoFilter__filter">
        {filters.map((per) => {
          return (
            <TodoFilterButton
              key={per}
              filter={props.filter}
              filterBtnsHandler={props.filterBtnsHandler}
              btnText={per}
            />
          );
        })}
      </div>
      <div onClick={props.clearCompleted} className="TodoFilter__clearMsg">
        {props.totalCount === props.ActiveCount ? null : (
          <p className="filerText">clear completed</p>
        )}
      </div>
    </div>
  );
};
export default TodoFilter;
