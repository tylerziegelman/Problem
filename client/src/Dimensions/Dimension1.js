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
    if(this.props.dimension) {
      return <>
                <h1>{this.props.dimension.dimension}</h1>
                {this.props.dimension.attributes.map((attr)=>{
                    return <button onClick={this.props.toggle}>{attr.attribute}</button>
                })}
             </>     
    }
    
  //   if(this.props.dimension!==undefined){
  //     console.log(this.props.dimension)
  //   return (this.props.dimension || []).map(({dimension, attributes},i)=>{
  //     // console.log(this.props.dimensions[this.props.count])
  //     return <div className="menu-dimension-wrapper" id={`menu-div-${i}`} key={i}>
                 
  //                <h1>{dimension}</h1>
  //                {attributes.map((attribute, j)=>{
                     
  //                    return <button className='button-audience' onClick={this.props.toggle}  id={`menu-attr-${j}`} key={j}>{attribute.attribute}</button>
                     
  //                })}
  //                {/* <p onClick={()=>{this.props.history.push("/Location")}}>Next Item</p> */}
  //            </div>
             
  // })}
  //   return <button onClick={this.props.toggle} >toggle me</button>
  }


  render() {
    if(this.props.dimension){
    console.log(this.props.dimension)
    }
    return (
      <div>
        
        {this.displayDimension1()}
       
        
      </div>
    )
  }
}
 export default withRouter(Dimension1);