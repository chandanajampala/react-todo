import React from 'react';
import React, { Component } from 'react';


export default class Item extends Component{

onClick = (()=>{
  this.props.deleteItem(this.props.item)
})
l
render(){
  return(
    <div>
    {this.props.item} <button onClick = {this.onClick} >delete</button>
    </div>
  )
}

}