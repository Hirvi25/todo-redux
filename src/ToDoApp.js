import React from 'react';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import VisibilityFilter from './components/VisibilityFilter';
import './App.css';

export default function ToDoApp(){
    return(
        <div className='todo-app'>
            <h1>TODO LIST</h1>
            <AddToDo />
            <ToDoList />
            <VisibilityFilter />
        </div>
    )
} 