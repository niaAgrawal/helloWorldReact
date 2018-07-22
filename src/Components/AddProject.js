import React, { Component} from 'react';
import uuid from 'uuid';

class AddProject extends Component{

  static defaultProps = {
    categoryObj:['Women', 'Men', 'Petite','Toddler']
  };
  constructor(){
    super();
    this.state = {
      newState:{}
    }
  }
  handleSubmit(e){
    //console.log(this.refs.title.value);
    //console.log(this.refs.category.value);
    if(this.refs.title.value === ''){
      alert('Title is required');
    }else{
      this.setState({
        newState:{
          id:uuid.v4(),
          title:this.refs.title.value,
          category:this.refs.category.value
        }
      },function(){
        //console.log(this.state);
        this.props.addProject(this.state.newState);
      })
    }
    e.preventDefault();
  }
  render(){
    let categoryOptions = this.props.categoryObj.map(cat =>{
      console.log(cat);
      return(
        <option key={cat} value={cat}>{cat}</option>
      );
    });
    return(
      <div className="AddProject">
        <h3> Add Projects:</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label> Title: </label>
            <input type="text" ref="title" />
          </div>
          <br/>
          <div>
            <label> Category:</label>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
/*AddProject.propTypes = {
  categoryObj: React.PropTypes.array,
  addProject: React.PropTypes.func
}*/
export default AddProject;
