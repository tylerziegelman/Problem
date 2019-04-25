import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Dimension3 extends Component {
 
    constructor(){
        super()
        this.displayDimension3 = this.displayDimension3.bind(this)
      }
      componentDidMount(){
       
      }
       
      displayDimension3(){
 
        return (this.props.dimension3 || []).map(({dimension, attributes},i)=>{
            
          return <div className="menu-dimension-wrapper" id={`menu-div-${i}`} key={i}>
                     
                     <h1>{dimension}</h1>
                     {attributes.map((attribute, j)=>{
                         
                         return <button className="button-program" onClick={this.props.toggle}  id={`menu-attr-${j}`} key={j}>{attribute.attribute}</button>
                     })}
                     {/* <p onClick={()=>{this.props.history.push("/Issue")}}>Next Item</p> */}
                 </div>
                 
      })
        
      }
    

  render() {
    return (
      <div>
        {this.displayDimension3()}
        
      </div>
    )
  }
}
export default withRouter(Dimension3)