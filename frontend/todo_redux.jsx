import React from 'react';
import ReactDOM from 'react-dom';

import { allTodos } from './reducers/selectors.js';
import configureStore from './store/store.js';
import { receiveTodos } from './actions/todo_actions.js';
import { receiveTodo } from './actions/todo_actions.js';
import Root from './components/root.jsx';
import {App} from './components/app.jsx';

const store = configureStore();

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.store = store;
window.allTodos = allTodos;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});
