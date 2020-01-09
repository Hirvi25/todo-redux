import React from 'react';
import { connect } from "react-redux";
import { getTodosByVisibilityFilter, getTodos } from "../redux/selectors";
import ToDo from './ToDo';
import '../App.css';

const ToDoList = ({ todos }) =>(
    <ul className="liststyle">
        {todos && todos.length?
        todos.map((todo, index) => {
        return <ToDo key={`todo-${todo.id}`} todo={todo}/>;
    }):'No Data'}
    </ul>
);

const mapStateToProps = state =>{
    const { visibilityFilter } = state;
    // const todos = getTodos(state);
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    // const todos = state.todos.allIds.map(id => (state.todos.byIds[id]));
    return { todos };
};

export default connect(mapStateToProps)(ToDoList);