import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {

    deleteProject(id){
        this.props.onDelete(id, 'pro');
    }

  render() {
      let projectitems;
      projectitems = this.props.projects.map((project)=>{
          return (
              <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project ={project} />
          )
      })
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        <ul>
        {projectitems}
        </ul>
      </div>
    );
  }
}

Projects.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func,
}

export default Projects;
