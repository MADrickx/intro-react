import React, { useState, useRef, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import uuidv4 from 'uuid/dist/v4';

function App() {
  const [todos, setTodos] = useState([]);
  const toDoNameRef = useRef();
  const LOCAL_STORAGE_KEY = 'todoApp.todos';

  useEffect(() => {//array vide en second paramètre -> on veut que ce useEffect ne se charge qu'une seule fois
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));//on récupère les POTENTIELS todo dans le localStorage
    if (storedTodos) setTodos(storedTodos);//si il y a des todo dans le local storage, le retourne à setTodos pour nous les afficher
  },[])// <- ici le param array vide

  useEffect(() => {// useEffect store dans les cookies le tableau todos à chaque modifs de ce dernier
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])// <- ici on met le tableau todos en param pour que ce useEffect soit appelé à chaque modif des todos

  function toggleTodo(id){//fonction qui sert à toggle les checkbox avec le true ou false
    const newTodos = [...todos];//[...] = étendre avec données du tableau
    const todo = newTodos.find(todo => todo.id === id); // ici on check dans les todos LE todo qui correspond à l'id du param de la fonction
    todo.complete = !todo.complete;// s'il est true, l'initialise à false, s'il est false l'initialise à true
    setTodos(newTodos); //stock dans le tableau todos les données de quel élèment a été coché ou décoché
  }

  function clearToDos(){//fonction pour supprimer les todos avec checkBox -> true
    const newTodos = todos.filter(todo => !todo.complete); // on copie les données des todos dans un nouveau tableau et on filtre les todo qui ont un .complete -> false
    setTodos(newTodos);//on retourne le nouveau tableau à setTodos qui va seulement nous render les todo avec le .complete -> false et donc supprimer les todo.complete -> true
  }

  function HandleAddToDo(){//fonction pour ajouter des todo
    const name = toDoNameRef.current.value; //ici on récupère la value de l'input dans lequel l'utilisateur écris
    if (name === '') return; // si l'input est vide et qu'on submit -> s'arrète et return ; sinon éxécute la ligne suivante
    setTodos(prevTodos => {// on retourne à setTodos une fonction avec notre tableau rempli de todo
      return [...prevTodos, {id:uuidv4(), name:name, complete:false} ] // et va nous afficher les anciennes todo + la nouvelle fraichement ajoutée
    })
    toDoNameRef.current.value = null; // remet l'input à zéro, sans value
  }

  return (
    <div className="App">
      <Header/>
      <div className="addToDo">
          <input ref={toDoNameRef} type="text" placeholder="Write a new todo" />
          <div className="buttons">
            <button onClick={HandleAddToDo}>Add todo</button>
            <button onClick={clearToDos}>Clear todos</button>
          </div>
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