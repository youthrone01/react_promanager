import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {

    deleteProject(id){
        this.props.onDelete(id,"todo");
    }

  render() {
      let todoitems;
      if(this.props.todos === undefined){
        todoitems = null;
      }else{      
      todoitems = this.props.todos.map((todo)=>{
          return (
              <TodoItems onDelete={this.deleteProject.bind(this)} key={todo.id} todo ={todo} />
          )
      })
    }
    return (
      <div className="Todos">
        <h3>Todo Items</h3>
        <ul>
        {todoitems}
        </ul>
      </div>
    );
  }
}

Todos.propTypes = {
    todos: PropTypes.array,
    onDelete: PropTypes.func,
}

export default Todos;
