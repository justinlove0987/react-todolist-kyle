import TodoList from "./TodoList";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["1", "2"]);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
