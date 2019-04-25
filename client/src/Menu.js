import React, { Component } from 'react'
import axios from 'axios'
import './Menu.css'



const selectionsArray = []
let selectionsArrayFiltered = []

export default class Menu extends Component {
    constructor(){
        super()
        this.state = {
            
        }
        this.displayInOrder = this.displayInOrder.bind(this)
        this.renderMenu = this.renderMenu.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.renderSelectedValues = this.renderSelectedValues.bind(this)
        this.displayDimension2 = this.displayDimension2.bind(this)
        this.displayDimension3 = this.displayDimension3.bind(this)
        this.displayDimension4 = this.displayDimension4.bind(this)
        this.handleAdd2 = this.handleAdd2.bind(this)
        this.handleAdd3 = this.handleAdd3.bind(this)
        this.handleAdd4 = this.handleAdd4.bind(this)
        this.topMenuState=this.topMenuState.bind(this)
        this.pointerNone = this.pointerNone.bind(this)
    }

    componentDidMount(){
        axios.get('/getData').then((response)=>{
            
            this.setState({
                dimensions: response.data.dimensions,
                dimension1: [response.data.dimensions[0]],
                dimension2: [response.data.dimensions[1]],
                dimension3: [response.data.dimensions[2]],
                dimension4: [response.data.dimensions[3]],
                selected: [{dim1: true},{dim2:false},{dim3:false},{dim4: false}],
                disabled: false,
                btnSelections: selectionsArray
               
            })
        })
    }

handleAdd(e) {
    e.preventDefault()
    let buttonText = e.target.innerHTML
    
    selectionsArray.push(buttonText)
    selectionsArrayFiltered = [...(new Set(selectionsArray))]
   
    this.setState({
        btnSelections: selectionsArray,
        selected: [{dim1: false},{dim2:true},{dim3:false},{dim4: false}],

        
    })  
    console.log(this.state.btnSelections)
}


renderSelectedValues(){
    if(selectionsArray.length){
        
       return this.state.btnSelections.map((btn)=>{
           
               return  <button onClick={this.handleRemove}>
                           {btn}
                       </button>
                       
                   })
   }
   
}

topMenuState(){

}


handleRemove(e){
     e.preventDefault()
     console.log(selectionsArrayFiltered)  
     let index = selectionsArray.indexOf(e.target.innerHTML)
   console.log(index)
     selectionsArray.splice(index, 1)
    
     if (index > -1) {
        
        this.setState({
            btnSelections: [...(new Set(selectionsArray))],
            selector: [{dim2: false}]
            
        }) 
    }
    
}
 renderMenu() {    
    //     return (this.state.dimensions || []).map(({dimension, attributes},i)=>{
         
    //        return <div className="menu-dimension-wrapper" id={`menu-div-${i}`} key={i}>
                      
    //                   <h1>{dimension}</h1>
    //                   {attributes.map((attribute, j)=>{
                          
    //                       return <button onClick={this.handleAdd} key={j}>{attribute.attribute}</button>
    //                   })}
    //               </div>
                  
    //    })
    return (this.state.dimension1 || []).map(({dimension, attributes},i)=>{
        
        return <div className="menu-dimension-wrapper" id={`menu-div-${i}`} key={i}>
                   
                   <h1>{dimension}</h1>
                   {attributes.map((attribute, j)=>{
                       
                       return <button onClick={this.handleAdd} id={`menu-attr-${j}`} key={j}>{attribute.attribute}</button>
                   })}
               </div>
               
    })
    
       
 
 }
 handleAdd2(e) {
    e.preventDefault()
    let buttonText = e.target.innerHTML
    
    selectionsArray.push(buttonText)
    selectionsArrayFiltered = [...(new Set(selectionsArray))]
    
    this.setState({
        btnSelections: selectionsArray,
        selected: [{dim1: false},{dim2:false},{dim3:true},{dim4: false}]
        
    })  
   
}

handleAdd3(e) {
    e.preventDefault()
    let buttonText = e.target.innerHTML
    
    selectionsArray.push(buttonText)
    selectionsArrayFiltered = [...(new Set(selectionsArray))]
   
    this.setState({
        btnSelections: selectionsArray,
        selected: [{dim1: false},{dim2:false},{dim3:false},{dim4: true}],
        
    })  
    
}

pointerNone(e){
    document.getElementById('menu-div-0').style.cursor='none'
}

handleAdd4(e) {
    e.preventDefault()
    let buttonText = e.target.innerHTML
    
    selectionsArray.push(buttonText)
    selectionsArrayFiltered = [...(new Set(selectionsArray))]

    this.setState({
        btnSelections: {id: 4,selectionsArrayFiltered},
        selected: [{dim1: false},{dim2:false},{dim3:false},{dim4: true}],
        
    })  
    
}

 displayDimension2(){
    //  this.setState({...this.state, selected: [{dim2: true}]})
    return (this.state.dimension2 || []).map(({dimension, attributes},i)=>{
         
        return <div className="menu-dimension-wrapper" id={`menu-div-${i}`} key={i}>
                   
                   
           
                   <h1>{dimension}</h1>
                   {attributes.map((attribute, j)=>{
                       
                       return <button onClick={this.handleAdd2} className="menu-program-attr" id={`menu-attr-location-${j}`} key={j}>{attribute.attribute}</button>
                   })}
          
               </div>
               
    })
 }

 displayDimension3(){
    // this.setState({...this.state, selected: [{dim3: true}]})
    return (this.state.dimension3 || []).map(({dimension, attributes},i)=>{
         
        return <div className="menu-dimension-wrapper" id={`menu-div-program-${i}`} key={i}>
                   
                   <h1>{dimension}</h1>
                   {attributes.map((attribute, j)=>{
                       
                       return <button onClick={this.handleAdd3} className="menu-attr-program" id={`menu-attr-program-${j}`} key={j}>{attribute.attribute}</button>
                   })}
               </div>
               
    })
 }

 displayDimension4(){
    // this.setState({selected: [{dim3: true}]})
    return (this.state.dimension4 || []).map(({dimension, attributes},i)=>{
         
        return <div className="menu-dimension-wrapper" id={`menu-div-${i}`} key={i}>
                   
                   <h1>{dimension}</h1>
                   {attributes.map((attribute, j)=>{
                       
                       return <button onClick={this.handleAdd4} id={`menu-attr-${j}`} key={j}>{attribute.attribute}</button>
                   })}
               </div>
               
    })
 }

displayInOrder(){

    return (this.state.selected || []).map((selector)=>{
        
    if(selector.dim1===true ) {
        // return  this.displayDimension2()
        return this.renderMenu()
        // {return this.displayDimension2()}
        
      
    }else if(selector.dim2===true){return  this.displayDimension2()
    }else if(selector.dim3===true){return  this.displayDimension3()}
    else if(selector.dim4===true){return  this.displayDimension4()}
    
})        
    }


 

 render() {

    return (
        <div className="menu-wrapper">

  
      
       
        {this.renderSelectedValues()}
        {this.displayInOrder()}
        
      </div>
    ) 
  }
}
