import React, {Component} from 'react';

class TodoItems extends Component{
  render(){
    console.log(this.props.todo.title);
    return(
        <li>
          <strong>{this.props.todo.id}</strong>:: {this.props.todo.title}
        </li>
    );
  };
}

export default TodoItems;
