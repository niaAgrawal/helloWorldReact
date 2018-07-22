import React, {Component} from 'react';
import TodoItems from './todoItems';

class Todos extends Component{
  render(){
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log(todo);
        return(
          <TodoItems key={todo.title} todo={todo} />
        );
      });
    }
    return(
      <div className="Todos">
        <h3> Todos Projects</h3>
          {todoItems}
      </div>
    );
  };
}

export default Todos;
