import React from "react";
import "./TodoFilterButton.css";

const TodoFilterButton = (props) => {
  // console.log(props)
  var classCustom = "TodoFilterButton";
  if(props.filter===props.btnText){
    classCustom = "TodoFilterButton TodoFilterButton--active";
  }
  return (
    <div onClick = {()=>props.filterBtnsHandler(`${props.btnText}`)}  className={classCustom}>
      <p className="TodoFilterButton__text">{props.btnText}</p>
    </div>
  );
};
export default TodoFilterButton;
