import React from 'react';
import uniqueId from '../../util/util.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null, title: "", body: "", done: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let id = uniqueId();
    const newTodo = {id: id, title: this.state.title, body: this.state.body, done: false};
    this.props.receiveTodo(newTodo);
    this.clearForm();
  }

  clearForm() {
    this.setState({id: null, title: "", body: "", done: false});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.updateTitle}
          value={this.state.title}>
        </input>

        <input
          type="text"
          onChange={this.updateBody}
          value={this.state.body}>
        </input>
        <button>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
