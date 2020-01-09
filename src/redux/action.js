import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionType';

let nextid = 0;

export const addToDo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextid,
        content
    }
});

export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({
    type: SET_FILTER, 
    payload: { filter } 
});
