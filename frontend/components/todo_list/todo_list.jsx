import React from 'react';
import { allTodos } from '../../reducers/selectors.js';
import { TodoListItem } from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    // const titles = this.props.todos.map ( (todo, idx) => (<li key={idx}>{todo.title}</li>));
    return (
      <div>
        <ul>
        {this.props.todos.map ( (todo, key) => {
          return <TodoListItem key={key} todo={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo} />;
        })}
      </ul>
      <TodoForm receiveTodo={this.props.receiveTodo} />
    </div>
    );
  }
}

export default TodoList;
