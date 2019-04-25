import React, { Component } from 'react'
import { withRouter, BrowserRouter, Route } from "react-router";


class Dimension1 extends Component {
  constructor(){
    super()
    this.displayDimension1 = this.displayDimension1.bind(this)

  }
  componentDidMount(){
   
  }
   
  displayDimension1(){
    
    return (this.props.dimension1 || []).map(({dimension, attributes},i)=>{
        
      return <div className="menu-dimension-wrapper" id={`menu-div-${i}`} key={i}>
                 
                 <h1>{dimension}</h1>
                 {attributes.map((attribute, j)=>{
                     
                     return <button className='button-audience' onClick={this.props.toggle}  id={`menu-attr-${j}`} key={j}>{attribute.attribute}</button>
                     
                 })}
                 {/* <p onClick={()=>{this.props.history.push("/Location")}}>Next Item</p> */}
             </div>
             
  })
    
  }


  render() {
    
    return (
      <div>
        {this.displayDimension1()}
        
      </div>
    )
  }
}
 export default withRouter(Dimension1);