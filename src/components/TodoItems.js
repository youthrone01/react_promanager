import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {
    deleteproject(id){
        this.props.onDelete(id);
    }

    render() {
    return (
      <li className="TodoItems">
        <strong>{this.props.todo.title}</strong> - {this.props.todo.completed} <a href="#" onClick={this.deleteproject.bind(this, this.props.todo.id)}>X</a>
      </li>
    );
  }
}
TodoItems.propTypes = {
    todo: PropTypes.object,
    onDelete: PropTypes.func,
  }

export default TodoItems;
