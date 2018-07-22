import React, {Component} from 'react';


class ProjectItems extends Component{
  constructor(){
    super();
    this.state ={
      delProject:{}
    };
  }
  deleteProj(e,id){
    //console.log('test');
    //this.setState({
    //  delProject :
    //});
    this.props.onDelete(id);
    e.preventDefault();
  }
  render() {
    return (
      <li className="ProjectItems">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProj.bind(this,this.props.project.id)}>X</a>
      </li>
    );
  }
}

/*ProjectItems.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}*/

export default ProjectItems;
