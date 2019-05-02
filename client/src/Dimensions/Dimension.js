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

//   if(this.props.count){
//   selectedArray.push([this.props.lastSelected, this.props.dimensions[this.props.count-1]])
//   console.log(selectedArray)
//   return selectedArray.map((el)=>{
//       return el.map((ex)=>{
//           if(ex === '' || ex === undefined) {
//               let index = el.indexOf(ex)
//               el.splice(index,2)
              
//           }
          
//       })
     
//    })
   
// }
  
    
} 

goBackToDimension(e){
  //   let clicked = e.target.innerHTML
  //  selectedArray.map((el)=>{
  //      // console.log(e.target.innerHTML)
  //       if(el[0] === clicked.trim()){
  //          console.log(el[1])
  //       }
      
  //  })

}
mapIt(){
        
  // return selectedArray.map((el)=>{
  //     return <>{el[1].dimension}:<a onClick={this.props.goBackToDimension}>{el[0]}</a><br/></>
  // })
  
}
   
  displayDimension(){
   
    if(this.props.dimension && this.props.count <= 4) {
       
      return <>
                <h1>{this.props.dimension.dimension}</h1>
                {this.props.dimension.attributes.map((attr)=>{
                    return <button onClick={this.props.toggle}>{attr.attribute}</button>
                })}
                
                {/* <SelectedList goBackToDimension={this.goBackToDimension} selectedArray={this.lastSelectedArray} count={this.props.count} lastSelected={this.props.lastSelected} handleClick={this.handleClick} dimension={this.props.dimension} dimensions={this.props.dimensions}/> */}
             </>     
    }else {
      
      return <>
          
          <h1>All Done!</h1>
            <SelectedList mapIt={this.mapIt} goBackToDimension={this.goBackToDimension} selectedArray={this.lastSelectedArray}  count={this.props.count} lastSelected={this.props.lastSelected} handleClick={this.handleClick} dimension={this.props.dimension} dimensions={this.props.dimensions}/>
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