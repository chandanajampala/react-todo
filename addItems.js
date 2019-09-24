import React from 'react';
import React, { Component } from 'react';


export default class AddItem extends Component{
  constructor(){
    super();
    this.state = {
      newItem:""
    }
  }

  onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: '' });
    }

 onChange = (e) => this.setState({ newItem: e.target.value });
render(){
  return(
   <div>
       <form onSubmit = {this.onSubmit}>
          <input type = "text" name = "newItem" placeholder = "Add todo" value = {this.state.newItem}  onChange = {this.onChange}/>
          <input type="submit" value="Add"/>
       </form> 
   </div>
  )
}


}