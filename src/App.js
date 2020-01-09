import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ToDoApp from './ToDoApp';

function App() {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
}

export default App;
