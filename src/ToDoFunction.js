import React, { useState } from "react";

const ToDoFunction = () => {
  const [toDo, setTodo] = useState(" ");
  const [ToDoList, setToDoList] = useState([]);
  const handleAdd = () => {
    let ToDoLists = [...ToDoList, toDo];
    setToDoList(ToDoLists);
  };
  let todolist = (i) => {
    let todo = ToDoList.filter((j) => j !== i);
    setToDoList(todo);
  };
  const editTodo = (index) => {
    const todoList = [...ToDoList];
    todoList[index] = prompt("Edit your Todo", todoList[index]);
    setToDoList(todoList);
  };

  return (
    <div>
      <h1>ToDoApp</h1>
      <input
        type="text"
        placeholder="Add text"
        onChange={(e) => setTodo(e.target.value)}
        value={toDo}
      />
      <button onClick={() => handleAdd()}>Add</button>
      <button>Yes</button>
      <button>No</button>
      {ToDoList.map((i, index) => (
        <ul key={index}>
          <li>
            {i}
            <button onClick={() => editTodo(index)}>edit</button>
            <button onClick={() => todolist(i)}>delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default ToDoFunction;
