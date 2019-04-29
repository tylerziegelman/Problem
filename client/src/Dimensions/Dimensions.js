import React, { Component } from 'react'
import axios from 'axios'
import Dimension1 from './Dimension1'
import Dimension2 from './Dimension2'
import Dimension3 from './Dimension3'
import Dimension4 from './Dimension4'

import './Dimensions.css'

let buttonArr = []


export default class Dimensions extends Component {
    constructor(){
        super()
        this.state = {dimension1: [], dimensions: []}
        this.renderNew = this.renderNew.bind(this)
        this.toggle = this.toggle.bind(this)
        this.toggleNext = this.toggleNext.bind(this)
        this.toggleLast = this.toggleLast.bind(this)
        this.renderComponents = this.renderComponents.bind(this)
        this.spliceSelection = this.spliceSelection.bind(this)
        this.addToArr = this.addToArr.bind(this)
    }

    componentDidMount(){
        axios.get('/getData').then((response)=>{
            
            this.setState({
                
                count: 0,
                dimensions: response.data.dimensions,
                
                dimension2: [response.data.dimensions[1]],
                dimension3: [response.data.dimensions[2]],
                dimension4: [response.data.dimensions[3]],
                itemChosen: true,
                selected: 'dim1'
                // selected: [{dim1: true},{dim2:false},{dim3:false},{dim4: false}],
                // disabled: false,
                // btnSelections: selectionsArray
               
            })
        })
    }

    spliceSelection(e){
        let index = buttonArr.indexOf(e.target.innerHTML)
       console.log(buttonArr)
       
        //  buttonArr.splice(index,1)
         buttonArr[index]=undefined
        
         if(index===0){
             this.setState({selected:'dim1'})
         }else if (index===1){
             this.setState({selected: 'dim2'})
         }else if (index===2){
            this.setState({selected: 'dim3'})
        }else if (index===3){
            this.setState({selected: 'dim4'})
        }
         if (index > -1) {
          this.setState({
              buttonSelections: buttonArr
          })
        }

        
    }

  renderNew(){
   let buttonArrFiltered = [...(new Set(buttonArr))]
    return (buttonArrFiltered || []).map((text)=>{
        console.log(text)
        return <h3><a onClick={this.spliceSelection}>{text}</a>&#10006;</h3>})

  }
addToArr(e){
    let clicked = e.target.innerHTML

    buttonArr.push(clicked)
    let index = buttonArr.indexOf(undefined)
    buttonArr[index]=clicked
    return buttonArr  
       
  
        
    //    } else { let index = buttonArr.indexOf(undefined)
    //     buttonArr = buttonArr[index]=clicked
    //     this.setState({buttonSelections: buttonArr})
        
    //}
    //    else{ buttonArr.push(e.target.innerHTML)
    //     console.log(buttonArr)
    //     this.setState({buttonSelections: buttonArr})}
        // this.setState({buttonSelections: buttonArr})}
        // this.setState({buttonSelections: buttonArr, itemChosen: !this.state.itemChosen,selected: 'dim2'})
       
          
        //})   // el[index]=e.target
       
    //         arr.push(e.target)
    // buttonArr.push(e.target.innerHTML)
    // this.setState({buttonSelections: buttonArr})
        
   // })
    
}
toggle(e, id){
    
    if(this.state.count < 4){
        console.log(this.state.count += 1)
        this.setState({count: this.state.count++})
    }
    // this.addToArr(e)
    // (this.state.dimensions||[]).forEach((dimension,id=0)=>{
    //     console.log(id++)
    // })
    // if(this.state.dimensions.length){
    // for(let i = 0; i<=this.state.dimensions.length;){
    //     console.log(i)
    // }
    //this.setState({selected: 'dim2',buttonSelections: buttonArr})
}
toggleNext(e) {
    this.addToArr(e)
    this.setState({selected: 'dim3',buttonSelections: buttonArr})
}

toggleLast(e) {
    this.addToArr(e)
    this.setState({selected: 'dim4',buttonSelections: buttonArr})
}

renderComponents(){
    return <>
                 <Dimension1 dimension={this.state.dimensions[this.state.count]} dimensions={this.state.dimensions} count={this.state.count} toggle={this.toggle}  renderNew={this.renderNew} dimension1={this.state.dimension1}/>
                               </>
//    if(this.state.selected === 'dim1'){
//        return <>
//                  <Dimension1 dimensions={this.state.dimensions} counter={this.state.count} toggle={this.toggle}  renderNew={this.renderNew} dimension1={this.state.dimension1}/>
//               </>
//    }else if(this.state.selected === 'dim2') {
//         return <>
//                  <Dimension1 dimensions={this.state.dimensions} toggle={this.toggle}   renderNew={this.renderNew} dimension1={this.state.dimension1}/>
//                  <Dimension2 toggle={this.toggleNext} className='displayed' renderNew={this.renderNew} dimension2={this.state.dimension2}/>
                
//              </>
//    }else if(this.state.selected === 'dim3') {
//     return <>
//                  <Dimension1 toggle={this.toggle}  renderNew={this.renderNew} dimension1={this.state.dimension1}/>
//                  <Dimension2 toggle={this.toggleNext} className='displayed' renderNew={this.renderNew} dimension2={this.state.dimension2}/>
//                 <Dimension3 toggle={this.toggleLast} renderNew={this.renderNew} dimension3={this.state.dimension3}/>
//           </>
//    }else if(this.state.selected==='dim4'){
//     return <>
//                 <Dimension1 toggle={this.toggle}  renderNew={this.renderNew} dimension1={this.state.dimension1}/>
//                  <Dimension2 toggle={this.toggleNext} className='displayed' renderNew={this.renderNew} dimension2={this.state.dimension2}/>
//                 <Dimension3 toggle={this.toggleLast} renderNew={this.renderNew} dimension3={this.state.dimension3}/>
//                 <Dimension4 toggle={this.toggleLast} renderNew={this.renderNew} dimension4={this.state.dimension4}/>
//              </>
//    }else {return}
    
}

  render() {
      
    return (
        
      <div>
       
        {this.renderComponents()}
        {this.renderNew()}
        
      </div>
      
    )
  }
}
