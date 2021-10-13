import React from 'react';
import './App.scss';
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';


function App() {
  return (
    <div className="App">
      <Header/>
      <AddToDo/>
      <ToDoList/>
    </div>
  );
}

export default App;
