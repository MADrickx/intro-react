import React, { useState, useRef, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import uuidv4 from 'uuid/dist/v4';

function App() {
  const [todos, setTodos] = useState([]);
  const toDoNameRef = useRef();
  const LOCAL_STORAGE_KEY = 'todoApp.todos';

  useEffect(() => {//array vide -> on veut que ce useEffect ne se charge qu'une seule fois
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  },[])

  useEffect(() => {// useEffect store dans les cookies le tableau todos à chaque modifs de ce dernier
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function toggleTodo(id){
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

function clearToDos(){
  const newTodos = todos.filter(todo => !todo.complete);
  setTodos(newTodos);
}

  function HandleAddToDo(e){
    const name = toDoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(), name:name, complete:false} ]
    })
    toDoNameRef.current.value = null;
  }

  return (
    <div className="App">
      <Header/>
      <div className="addToDo">
          <input ref={toDoNameRef} type="text" placeholder="Write a new todo" />
          <button onClick={HandleAddToDo}>Add todo</button>
          <button onClick={clearToDos}>Clear todos</button>
        </div>
      <div className="toDoList">
        <ul>
         <ToDoList todos={todos} toggleTodo={toggleTodo} />
        </ul>
        <div>{todos.filter(todo=>!todo.complete).length} left</div>
      </div>

    </div>
  );
}

export default App;