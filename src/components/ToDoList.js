import React, {useState} from "react";

export default function TodoList() {
    const initialTodos = ["My first todo", "My second todo"];
    const [todos, setTodos] = useState(initialTodos);
  return (
      <div className="toDoList">
      <h1>ToDo's</h1>
        <ul>
            {todos.map((todo) => (
                <li>
                <input type="checkbox" /> {todo}
                </li>
            ))}
        </ul>
      </div>
    
  );
}