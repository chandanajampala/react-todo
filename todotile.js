import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Items from './items'
import AddItem from './addItems'


export default class Tile extends Component {
   constructor() {
    super();
    this.state = {
      items: []
    };
  } 


 addItem = (item) => {
    event.preventDefault();
      this.setState({
      items: [...this.state.items,item]
    });
  }

  deleteItem = (item)=>{
          this.setState({ items: [...this.state.items.filter(todo => todo !== item)]})
  }

 render() {
   return(
     <div>
   <h1>ToDo list</h1>  
   <div> 
      <Items items = {this.state.items} deleteItem = {this.deleteItem}/>
      <AddItem items = {this.state.items} addItem = {this.addItem}/>
    </div>    
  
  </div>
  )
 }
}
