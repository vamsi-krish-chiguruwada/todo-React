import React from "react";
import "./App.css";
import TodoListMvc from "./Components/TodoListMvc/TodoListMvc";

function App() {
  return (
    <div className="App">
      {/* <div className="todoWraper"> */}
        <TodoListMvc />
      {/* </div> */}
    </div>
  );
}

export default App;

/****************************************\


import React from "react";
import './TodoFilterButton.css';

const TodoFilterButton = ()=> {
  return (
    <div className="TodoFilterButton">
      
    </div>
  );
}
export default TodoFilterButton;


\****************************************/
