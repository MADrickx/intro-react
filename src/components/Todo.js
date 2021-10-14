import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <li>
                <input type="checkbox" name={todo.name} id={todo.id} checked={todo.complete} onChange={handleTodoClick}/> 
                <label htmlFor={todo.id}>{todo.name}</label> 
                </li>
        </div>
    )
}
