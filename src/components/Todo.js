import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Todo({todo, toggleTodo}) {

    const check = <FontAwesomeIcon icon={faCheck} />

    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <>
            <li>
                <label htmlFor={todo.id}>
                    <input type="checkbox" name={todo.name} id={todo.id} checked={todo.complete} onChange={handleTodoClick}/>
                    <span></span>
                    <div className='success'>{check}</div>
                    {todo.name}
                
                </label> 
                </li>
        </>
    )
}
