import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';
import AddProject from './components/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './components/Todos';

class App extends Component {
constructor(){
  super();
  this.state = {
    projects: []
  }
}
getProjects(){
  this.setState({projects:[
    {
      id: uuid.v4(),
      title: "Business Website",
      category:"Web Design"
    },
    {
      id: uuid.v4(),
      title: "Social App",
      category:"Mobile Development"
    },
    {
      id: uuid.v4(),
      title: "Ecommerce Shopping Cart",
      category:"Web Development"
    },
  ]})
};

getTodos(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({todos: data}, function(){
        console.log(this.state);
      })
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
  });
}

componentWillMount(){
  this.getProjects();
  this.getTodos();
};

componentDidMount(){
  this.getTodos()
}
  handleaddproject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects})
  }

  handleDelete(id,key){
    if(key==="pro"){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
    }else{
      let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    this.setState({todos: todos});
    }
  }

  render() {
    return (
      <div className="App">
        <AddProject addproject={this.handleaddproject.bind(this)} />
        <Projects onDelete={this.handleDelete.bind(this)} projects = {this.state.projects} />
        <br />
        <hr />
        <Todos onDelete={this.handleDelete.bind(this)} todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
