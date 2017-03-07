import React from 'react';
import TodoDetailView from './todo_detail_view.jsx';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions.js';

const MapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(null, MapDispatchToProps)(TodoDetailView);
