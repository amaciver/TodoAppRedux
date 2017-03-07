import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

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

    <TodoDetailViewContainer id={todo.id} body={todo.body} />
  </div>

  
);

// <button key={todo.id} onClick={() => removeTodo(todo.id)}>Remove</button>
