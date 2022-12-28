import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState('')

  const addTodo = () => {
    if (todo !== "") {
      setTodo([...todos, todo])
      setTodo("")
    }
  }
    const deleteTodo = (text) => {
      const newTodos = todos.filter((todo) => {
        return todo !== text
    })
    setTodos(newTodos)
    }
  
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
}

export default Todo;
