import React from 'react';

export const TodoListItem = ({todo, removeTodo, receiveTodo}) => (
  <div>
    <li>{ todo.title }</li>
    <button  onClick={ () => {
        return receiveTodo({
          id: todo.id,
          title: todo.title,
          body: todo.body,
          done: !todo.done});}
      }>
        Make it { (!todo.done).toString()}
      </button>
    <button key={todo.id} onClick={() => removeTodo(todo.id)}>Remove</button>
  </div>
);
