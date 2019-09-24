import React from 'react';
import React, { Component } from 'react';
import Item from './item';


export default class Items extends Component{

render(){
  return(
    <div>
    {
    this.props.items.map((todo) => (
            <Item item = {todo} deleteItem = {this.props.deleteItem} />
        )
  )}
  </div>
  )
}

}