import React from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../redux/action';
import '../App.css';

const ToDo = ({ todo, toggleToDo}) =>(
    <li className="todo-item" onClick={() => toggleToDo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span>
            {todo.id}:{todo.content}
        </span>
    </li>
);

export default connect(null,{toggleToDo})(ToDo);