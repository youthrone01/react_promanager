import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ProjectItem extends Component {
    deleteproject(id){
        this.props.onDelete(id);
    }

    render() {
    return (
      <li className="ProjectItem">
        <strong>{this.props.project.title}</strong> - {this.props.project.category} <a href="#" onClick={this.deleteproject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}
ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func,
  }

export default ProjectItem;
