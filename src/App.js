import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/todos'
import $ from 'jquery';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects:[],
      todos:[]
    }
  }

  getProjects(){
    this.setState({projects:[
      {
        id:uuid.v4(),
        title :'Women',
        category :'Jeans'
      },
      {
        id:uuid.v4(),
        title :'Men',
        category :'Pants'
      },
      {
        id:uuid.v4(),
        title :'Petite',
        category :'Dresses'
      }
    ]});
  }

  //make a ajax call
  getTodos(){
    $.ajax({
      url:"https://jsonplaceholder.typicode.com/todos",
      dataType:"json",
      cache:false,
      success:function(data){
        this.setState({todos:data},function(){
          console.log(this.state);
        })
      }.bind(this),
      error:function(xhr,status,err){
        console.log('err'+err);
      }.bind(this)
    });
  }

  //fetching data from ajax call
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProjects(nwproject){
    //console.log(project)
    let newProj = this.state.projects;
    newProj.push(nwproject);
    this.setState({projects:newProj});
  }
  handleDeleteProject(id){
    let delProj = this.state.projects;
    let index = delProj.findIndex(x => x.id === id);
    delProj.splice(index,1);
    this.setState({projects:delProj});
  }
  render(){
    return(
      <div className ='App'>
        My App
        <br/>
        <AddProject addProject={this.handleAddProjects.bind(this)}/>
        <br/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <br/>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
