import React, { useState, useEffect } from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoSearchArea from "../TodoSearchArea/TodoSearchArea";
import TodoItem from "../TodoItem/TodoItem";
import TodoFilter from "../TodoFilter/TodoFilter";
import "./TodoListMvc.css";

const TodoListMvc = () => {
  const [todos, setTodos] = useState([]);

  const [checkedAll, setCheckedAll] = useState(false);
  const [inputText, setinputText] = useState("");
  const [filter, SetFilter] = useState("All");
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("todolist"));
    if (temp) {
      setTodos(temp);
    } else {
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  const inputChangeHandler = (e) => {
    setinputText(e.target.value);
  };

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    if (!findindex_list_objs(inputText)) {
      let temp = [...todos];
      temp.unshift({ text: inputText, checked: false });
      setTodos(temp);
      setinputText("");
    } else {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 400);
    }
  };

  const removeTodo = (per) => {
    let temp = [...todos];
    temp.splice(findindex_list_objs(per), 1);
    setTodos(temp);
  };

  const clearCompleted = () => {
    setTodos(getTodosByFilter("Active"));
  };

  const toggleSellect = (per) => {
    let temp = [...todos];
    temp[findindex_list_objs(per)].checked = !todos[findindex_list_objs(per)].checked;
    setTodos(temp);
  };

  const findindex_list_objs = (per) => {
    for (let i in todos) {
      if (todos[i].text === per) {
        return i;
      }
    }
  };

  const selectAllTodosHandler = () => {
    let temp = [];
    todos.map((per) => {
      temp.push({ text: per.text, checked: !checkedAll });
    });
    setTodos(temp);
    setCheckedAll(!checkedAll);
  };

  const filterBtnsHandler = (per) => {
    SetFilter(per);
  };

  const getTodosByFilter = (per) => {
    if (per === "Active") {
      let temp = [];
      todos.map((obj) => {
        if (!obj.checked) {
          temp.push(obj);
        }
      });
      return temp;
    } else if (per === "Completed") {
      let temp = [];
      todos.map((obj) => {
        if (obj.checked) {
          temp.push(obj);
        }
      });
      return temp;
    } else return todos;
  };
  const handleEditSubmit = (text, editText) => {
    if (!findindex_list_objs(editText)) {
      let temp = [...todos];
      temp[findindex_list_objs(text)].text = editText;
      setTodos(temp);
      setinputText("");
    } else {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 600);
    }
  };

  return (
    <div className="TodoListMvc">
      <TodoHeader />
      <div className="TodoListMvc__body">
        <TodoSearchArea
          totalCount={todos.length}
          selectAllTodosHandler={selectAllTodosHandler}
          inputChangeHandler={inputChangeHandler}
          inputText={inputText}
          inputSubmitHandler={inputSubmitHandler}
          // inputChangeHandler={inputChangeHandler}
        />
        {warning ? <p>Already Exist</p> : null}
        {getTodosByFilter(filter).map((per) => {
          return (
            <TodoItem
              key={per.text}
              toggleSellect={toggleSellect}
              removeTodo={removeTodo}
              text={per.text}
              checked={per.checked}
              handleEditSubmit={handleEditSubmit}
            />
          );
        })}
        {todos.length > 0 ? (
          <TodoFilter
            ActiveCount={getTodosByFilter("Active").length}
            totalCount={todos.length}
            filterBtnsHandler={filterBtnsHandler}
            filter={filter}
            clearCompleted={clearCompleted}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TodoListMvc;
