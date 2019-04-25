import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Review extends Component {
    constructor(){
        super()
        this.returnResults = this.returnResults.bind(this)
        this.getIndex = this.getIndex.bind(this)
    }

    getIndex(e){
        // let x = this.props.appState.buttonData.indexOf(e.target)
        let index = this.props.appState.buttonData.indexOf(e.target.innerHTML)
        console.log(index)
        if(index===0) {
            this.props.history.push('/Audience')
        }else if(index===1){
            this.props.history.push('/Location')
        }else if(index===2){
            this.props.history.push('/Program')
        }else if(index===3){
            this.history.push('/Issue')
        }
    }
  returnResults(){
      //map over state btn data
      //use the click to determine index position
      //conditionally route to that component withRouter
      
      
      return (this.props.appState.buttonData||[]).map((text,index)=>{
            return <p onClick={this.getIndex} key={index}>{text}</p>
      })
    
  }
  render() {
    return (
      <div>
        {this.returnResults()}
      </div>
    )
  }
}
export default withRouter(Review)