import React, { Component } from 'react'
import axios from 'axios'
import Dimension from './Dimension'
import './Dimensions.css'

export default class Dimensions extends Component {
    constructor(){
        super()
        this.state = {dimensions: [],count: null, newSelect: '',selectedArray: [] }
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
                
            })
        })
    }

    lastSelectedToArray(){
       
        if(this.state.count && this.state.selectedArray.length < 4){
            this.state.selectedArray.push([this.state.newSelect, this.state.dimensions[this.state.count-1]])
        
        }  

    } 

    mapSelections(){
        
        let selectedArrayNoDuplicates = []
        let dupes = {}
        for(let i = 0, l = this.state.selectedArray.length; i < l; i++) {
            if(dupes[this.state.selectedArray[i]]) { continue }
            selectedArrayNoDuplicates.push(this.state.selectedArray[i])
            dupes[this.state.selectedArray[i]] = true
        }
        
        return (selectedArrayNoDuplicates||[]).map((selected)=>{
        return <><p><a onClick={this.goBackToDimension}>{selected[0]}</a></p></>
        })
        
    }

    goBackToDimension(e){
        
        let selectedArrayNoDuplicates = [];
        let dupes = {};

        for(let i = 0, l = this.state.selectedArray.length; i < l; i++) {
            if(dupes[this.state.selectedArray[i]]) { continue }
            selectedArrayNoDuplicates.push(this.state.selectedArray[i])
            dupes[this.state.selectedArray[i]] = true
        }
       
        let clicked = e.target.innerHTML
        for(var i = 0; i< selectedArrayNoDuplicates.length; i++){
            for(var j = 0; j<selectedArrayNoDuplicates[i].length;j++){
                if(selectedArrayNoDuplicates[i][j]===clicked.trim()){
                    //delete gives error when mappeddimensions() tries to pull 0
                    //delete this.state.selectedArray[i]
                   
                     selectedArrayNoDuplicates[i][j]=null
                    this.setState({count: selectedArrayNoDuplicates[i][1].id-1})
                }
            }
         }
        // selectedArray.forEach((el)=>{
        //     if(el[0] === clicked.trim()){
        //         this.setState({count: el[1].id-1})
        //         el[0] = null  
        //     } 
        //     })  
    }
    
    toggleDimension(e){
        if(this.state.count < 4){
            this.setState({
                count: this.state.count+=1, 
                target: e.target, 
                newSelect: e.target.innerHTML,
                
            })
        }
        for(var i = 0; i< this.state.selectedArray.length; i++){
            for(var j = 0; j<this.state.selectedArray[i].length;j++){
                if(this.state.selectedArray[i][j]===null){
                   
                   this.state.selectedArray[i][j]=e.target.innerHTML
                   
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
