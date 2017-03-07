import React from 'react';


const TodoDetailView = ({id, body, steps, removeTodo}) => (
  <div>
    <button onClick={() => removeTodo(id)}>Remove</button>
    {body}
    {steps}
  </div>
);

export default TodoDetailView;
