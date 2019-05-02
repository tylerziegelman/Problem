import React, { Component } from 'react'
import axios from 'axios'
import Dimension from './Dimension'
import './Dimensions.css'

let selectedArray = []
export default class Dimensions extends Component {
    constructor(){
        super()
        this.state = {dimensions: [],count: null}
        this.lastSelectedToArray=this.lastSelectedToArray.bind(this)
        this.toggleDimension = this.toggleDimension.bind(this)
        this.renderComponents = this.renderComponents.bind(this)
        this.mapSelections = this.mapSelections.bind(this)
        this.goBackToDimension = this.goBackToDimension.bind(this)
        
    }
    componentDidMount(){
        axios.get('/getData').then((response)=>{
            this.setState({ 
                dimensions: response.data.dimensions,
                count: 0,
                newSelect: ''  
            })
        })
    }

    lastSelectedToArray(e){
        if(this.state.count && selectedArray.length <= 4){
        selectedArray.push([this.state.newSelect, this.state.dimensions[this.state.count-1]])
        
        }  

    } 

    mapSelections(){
        let selectedArrayNoDuplicates = [];
        let dupes = {};
        for(let i = 0, l = selectedArray.length; i < l; i++) {
            let elementsStringified = JSON.stringify(selectedArray[i]);
            if(dupes[elementsStringified]) { continue; }
            selectedArrayNoDuplicates.push(selectedArray[i]);
            dupes[elementsStringified] = true;
        }
        console.log(selectedArrayNoDuplicates)
        
       
        return (selectedArrayNoDuplicates||[]).map((selected)=>{
        return <><a onClick={this.goBackToDimension}>{selected[0]}</a><br/></>
        })
        
    }

    goBackToDimension(e){
        let mappedArray = [...(new Set(selectedArray))]
        let clicked = e.target.innerHTML
        for(var i = 0; i< mappedArray.length; i++){
            for(var j = 0; j<mappedArray[i].length;j++){
                if(mappedArray[i][j]===clicked.trim()){
                    console.log(mappedArray[i][1])
                    selectedArray[i][j]=null
                    this.setState({count: mappedArray[i][1].id-1})
                   
                   
                }
            }
         console.log(mappedArray)
         }
        // selectedArray.forEach((el)=>{
        //     if(el[0] === clicked.trim()){
        //         this.setState({count: el[1].id-1})
        //         el[0] = null  
        //     } 
        //     })  
    }
    
    toggleDimension(e, id){
        if(this.state.count < 4){
            this.setState({
                count: this.state.count+=1, 
                target: e.target, 
                newSelect: e.target.innerHTML,
                
            })
        }
        for(var i = 0; i< selectedArray.length; i++){
            for(var j = 0; j<selectedArray[i].length;j++){
                if(selectedArray[i][j]===null){
                   selectedArray[i][j]=e.target.innerHTML
                   
                }
            }
         
         }
    }
    renderComponents(){
        return <>
                     <Dimension  dimension={this.state.dimensions[this.state.count]} dimensions={this.state.dimensions} count={this.state.count} toggle={this.toggleDimension}/>
                
                </>
    }
  

  render() {
    {this.lastSelectedToArray()}
    return (
      <div>
        {this.mapSelections()}
        {this.renderComponents()}
      </div>
    )
  }
}
