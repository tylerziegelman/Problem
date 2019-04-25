import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Dimension2 extends Component {

    constructor(){
        super()
        this.displayDimension2 = this.displayDimension2.bind(this)
      }
      componentDidMount(){
       
      }
       
      displayDimension2(){
      
        return (this.props.dimension2 || []).map(({dimension, attributes},i)=>{
            
          return <div className="menu-dimension-wrapper" id={`menu-div-${i}`} key={i}>
                     
                     <h1>{dimension}</h1>
                     {attributes.map((attribute, j)=>{
                         
                         return <button className="button-location" onClick={this.props.toggle}  id={`menu-attr-${j}`} key={j}>{attribute.attribute}</button>
                     })}
                     {/* <p onClick={()=>{this.props.history.push("/Program")}}>Next Item</p> */}
                 </div>
                 
      })
        
      }
    

  render() {
    return (
      <div>
        {this.displayDimension2()}
        
      </div>
    )
  }
}
export default withRouter(Dimension2);