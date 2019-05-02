import React, { Component } from 'react'
import axios from 'axios'
import Dimension from './Dimension'

import './Dimensions.css'

let buttonArr = []
let selectedArray = []
let helper = []
export default class Dimensions extends Component {
    constructor(){
        super()
        this.state = {dimensions: [],count: null}
        this.lastSelectedToArray=this.lastSelectedToArray.bind(this)
        this.toggle = this.toggle.bind(this)
        this.renderComponents = this.renderComponents.bind(this)
       this.mapIt = this.mapIt.bind(this)
        this.goBackToDimension = this.goBackToDimension.bind(this)
        
        this.storeAndReplace = this.storeAndReplace.bind(this)
    }

    componentDidMount(){
        axios.get('/getData').then((response)=>{
            
            this.setState({
                
                
                dimensions: response.data.dimensions,
                count: 0,
                dimension1: [response.data.dimensions[0]],
                dimension2: [response.data.dimensions[1]],
                dimension3: [response.data.dimensions[2]],
                dimension4: [response.data.dimensions[3]],
                itemChosen: true,
                selected: 'dim1',
                newSelect: ''
                // selected: [{dim1: true},{dim2:false},{dim3:false},{dim4: false}],
                // disabled: false,
                // btnSelections: selectionsArray
               
            })
        })
    }

    

lastSelectedToArray(e){
    let newer = null
    if(this.state.count && selectedArray.length !== 4){
    selectedArray.push([this.state.newSelect, this.state.dimensions[this.state.count-1]])
    console.log(selectedArray)
    return selectedArray.map((el)=>{
        return el.map((ex)=>{
            if(ex === '' || ex === undefined) {
                let index = el.indexOf(ex)
                el.splice(index,2)   
            }  
        })
     })  
   }  
  
  } 


mapIt(){
   
    return (selectedArray||[]).map((eX)=>{
        
        return <><a onClick={this.goBackToDimension}>{eX[0]}</a><br/></>
    })
    }

    goBackToDimension(e){
        let clicked = e.target.innerHTML
        
       selectedArray.forEach((el)=>{
        
       
           // console.log(e.target.innerHTML)
            if(el[0] === clicked.trim()){
               
                el[0]=null
                this.setState({count: el[1].id-1})
                
        //       let kk =  el.filter((em)=>{
        //           return  em !== this.state.newSelect
        //         })        
        // console.log(kk)
               
                
            } 
           
            // if(selectedArray.length === 4){
            //     helper.push([this.state.newSelect])
            //      //this.setState({overflow: [...selectedArray, e.target.innerHTML]})
            //     }
            //     if(helper.length > 2) {
            //       el.splice(0,1,helper.pop())
            //     }
         
       })
       
       {this.storeAndReplace(e)}
    }
    storeAndReplace(e){
        let newer = null
        // if(selectedArray.length === 4){
        //     helper.push(this.state.newSelect)
        //      //this.setState({overflow: [...selectedArray, e.target.innerHTML]})
        //     }
        //     if(helper.length > 2){
        //        newer = helper.pop()
                
        //      }
             console.log(newer)
            
             selectedArray.forEach((el)=>{
        
       
                 console.log(el.indexOf(null))
                 if(el[0]===null){
                     el[0]='help me'
                    console.log('im null')
                 }
             //       let kk =  el.filter((em)=>{
             //           return  em !== this.state.newSelect
             //         })        
             // console.log(kk)
                    
                     
                 } 

        //   let index = selectedArray.indexOf(e.target)
        //  delete selectedArray[index]
        //  let tar = e.target.innerHTML.trim()
         
         
        //    el.splice(0,1,e.target.innerHTML)
      
             )
    }

    toggle(e, id){
    
        if(this.state.count !== 4){
            this.setState({
                count: this.state.count+=1, 
                target: e.target, 
                newSelect: e.target.innerHTML,
                
            })
        }
     
    }

    renderComponents(){
        
        return <>
                     <Dimension  dimension={this.state.dimensions[this.state.count]} dimensions={this.state.dimensions} count={this.state.count} toggle={this.toggle} lastSelected={this.state.newSelect} dimension1={this.state.dimension1}/>
                     
                </>
    
    }
  

  render() {
    {this.lastSelectedToArray()}
   
    return (
        
      <div>
       
        
       
        {this.mapIt()}
        {this.renderComponents()}
      </div>
      
    )
  }
}
