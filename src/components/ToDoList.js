import React,{useState} from "react";

export default function TodoList() {
    const initialTodos = ["My first todo", "My second todo"];
    const [todos, setTodos] = useState(initialTodos);
    return (
        <div className="toDoList">
        <ul>
        {todos.map((todo, index) => (
            <li key={index}>
            <input type="checkbox" name={todo} id={todo}/> 
            <label htmlFor={todo}>{todo}</label> 
            </li>
        ))}
        </ul>
        </div>
        
    );
}