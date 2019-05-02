import React, { Component } from 'react'
import { withRouter, BrowserRouter, Route } from "react-router";
import SelectedList from './SelectedList'
let selectedArray = []
class Dimension extends Component {
  constructor(){
    super()
    this.displayDimension = this.displayDimension.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.goBackToDimension = this.goBackToDimension.bind(this)
    this.lastSelectedToArray = this.lastSelectedToArray.bind(this)
    this.mapIt=this.mapIt.bind(this)
  }
  componentDidMount(){
  }

  handleClick(e){
    return <button>{this.props.target}</button>
  }


  lastSelectedToArray(){ 
  } 

  goBackToDimension(e){
  } 
  mapIt(){
  }
   
  displayDimension(){
   
    if(this.props.dimension && this.props.count <= 4) {
       
      return <>
                <h1>{this.props.dimension.dimension}</h1>
                {this.props.dimension.attributes.map((attr)=>{
                    return <button onClick={this.props.toggle}>{attr.attribute}</button>
                })}
             </>     
    }else {
      
      return <>
          
          <h1>All Done!</h1>
            <SelectedList mapIt={this.mapIt} goBackToDimension={this.goBackToDimension} selectedArray={this.lastSelectedArray}  count={this.props.count} lastSelected={this.props.lastSelected} handleClick={this.handleClick} dimension={this.props.dimension} dimensions={this.props.dimensions}/>
            </>
    }

  }


  render() {
    this.lastSelectedToArray()
    return (
      <div>
        
        {this.displayDimension()}
        {this.mapIt()}
        
      </div>
    )
  }
}
 export default withRouter(Dimension);