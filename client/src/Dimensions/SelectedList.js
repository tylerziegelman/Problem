//intital though process was to use this comp to render the selected items
//due to react only passing data down I needed to use a parent comp
import React, { Component } from 'react'
let selectedArray = []

export default class SelectedList extends Component {
    constructor(){
        super()
        this.lastSelectedToArray = this.lastSelectedToArray.bind(this)
        this.goBackToSelection = this.goBackToSelection.bind(this)
        this.mapIt = this.mapIt.bind(this)
        this.goBackToDimension = this.goBackToDimension.bind(this)
    }
    componentDidMount(){
       
    }

    goBackToSelection(e){
        // let index = selectedArray.indexOf(e.target.innerHTML)
    
       
        // //  buttonArr.splice(index,1)
        // selectedArray[index]=undefined
        
        //  if(index===0){
        //      this.setState({selected:'dim1'})
        //  }else if (index===1){
        //      this.setState({selected: 'dim2'})
        //  }else if (index===2){
        //     this.setState({selected: 'dim3'})
        // }else if (index===3){
        //     this.setState({selected: 'dim4'})
        // }
         

        
    }


lastSelectedToArray(){

    //    if(this.props.count){
    //    selectedArray.push([this.props.lastSelected, this.props.dimensions[this.props.count-1]])
    //    console.log(selectedArray)
    //    return selectedArray.map((el)=>{
    //        return el.map((ex)=>{
    //            if(ex === '' || ex === undefined) {
    //                let index = el.indexOf(ex)
    //                el.splice(index,2)
                   
    //            }
               
    //        })
          
    //     })
        
    // }
       
         
    } 

    goBackToDimension(e){
        //  let clicked = e.target.innerHTML
        // selectedArray.map((el)=>{
        //     // console.log(e.target.innerHTML)
        //      if(el[0] === clicked.trim()){
        //         console.log(el[1])
        //      }
           
        // })
   
    }

    mapIt(){
        
        // return selectedArray.map((el)=>{
        //     return <>{el[1].dimension}:<a onClick={this.props.goBackToDimension}>{el[0]}</a><br/></>
        // })
        
    }

    
  render() {
    
    // this.lastSelectedToArray()
    
    return (
        
      <div>
          {/* {this.props.mapIt()} */}
    {/* <button onClick={this.lastSelectedToArray()}>{this.props.lastSelected}</button>{} */}
        {/* {this.mapIt(selectedArray)} */}
      </div>
    )
  }
}
