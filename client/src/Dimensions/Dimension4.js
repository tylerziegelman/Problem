import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Dimension4 extends Component {
    constructor(){
        super()
        this.displayDimension4 = this.displayDimension4.bind(this)
        //this.displayText = this.displayText.bind(this)
      }
      componentDidMount(){
       
      }
       
      displayDimension4(){
        
        return (this.props.dimension4 || []).map(({dimension, attributes},i)=>{
            
          return <div className="menu-dimension-wrapper" id={`menu-div-${i}`} key={i}>
                     
                     <h1>{dimension}</h1>
                     {attributes.map((attribute, j)=>{
                         
                         return <button className="button-issue" onClick={this.props.toggle}  id={`menu-attr-${j}`} key={j}>{attribute.attribute}</button>
                     })}
                     
                 </div>
                 
      })
        
      }
    

  render() {
    return (
      <div>
        {this.displayDimension4()}
      
      </div>
    )
  }
}
export default withRouter(Dimension4)