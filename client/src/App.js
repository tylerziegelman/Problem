import React, { Component } from 'react';
import Dimensions from './Dimensions/Dimensions'
import 'antd/dist/antd.css'
import './App.css';
import axios from 'axios'
import Menu from './Menu'
import {BrowserRouter,Route} from 'react-router-dom'
import Dimension from './Dimensions/Dimension'
import Dimension2 from './Dimensions/Dimension2'
import Dimension3 from './Dimensions/Dimension3'
import Dimension4 from './Dimensions/Dimension4'
import Review from './Dimensions/Review'

class App extends Component {
  constructor(){
    super()
    this.state = {}
    
}

componentDidMount(){
    axios.get('/getData').then((response)=>{
        
        this.setState({
          
            // selected: [{dim1: true},{dim2:false},{dim3:false},{dim4: false}],
            // disabled: false,
            // btnSelections: selectionsArray
           
        })
    })
}


  render() {
    return (
      <BrowserRouter>
      <div className="App">
      {/* <Route exact path="/Audience" render={(props) => <Dimension renderNew={this.renderNew} handleDimensionBtnClick={this.handleDimensionBtnClick} itemChosen={this.state.itemChosen} dimension1={this.state.dimension1}/>} />
        <Route exact path="/Location" render={(props) => <Dimension2 renderNew={this.renderNew} handleDimensionBtnClick={this.handleDimensionBtnClick} itemChosen={this.state.itemChosen} dimension2={this.state.dimension2}/>} />
        <Route exact path="/Program" render={(props) => <Dimension3 renderNew={this.renderNew} handleDimensionBtnClick={this.handleDimensionBtnClick} itemChosen={this.state.itemChosen} dimension3={this.state.dimension3}/>}/>
        <Route exact path="/Issue" render={(props) => <Dimension4 renderNew={this.renderNew} handleDimensionBtnClick={this.handleDimensionBtnClick} itemChosen={this.state.itemChosen} dimension4={this.state.dimension4}/>} />
    // <Route exact path="/menu" component={Menu} />*/}
        <Route exact path="/"  component={Dimensions}/> 
        
        {/* <Route exact path="/Review" render={(props) => <Review appState={this.state}/>} /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
