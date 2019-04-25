import React, { Component } from 'react';
import Dimensions from './Dimensions/Dimensions'
import 'antd/dist/antd.css'
import './App.css';
import axios from 'axios'
import Menu from './Menu'
import {BrowserRouter,Route} from 'react-router-dom'
import Dimension1 from './Dimensions/Dimension1'
import Dimension2 from './Dimensions/Dimension2'
import Dimension3 from './Dimensions/Dimension3'
import Dimension4 from './Dimensions/Dimension4'
import Review from './Dimensions/Review'

class App extends Component {
  constructor(){
    super()
    this.state = {dimension1: [],itemChosen:false}
    
}

componentDidMount(){
    axios.get('/getData').then((response)=>{
        
        this.setState({
            dimensions: response.data.dimensions,
            dimension1: [response.data.dimensions[0]],
            dimension2: [response.data.dimensions[1]],
            dimension3: [response.data.dimensions[2]],
            dimension4: [response.data.dimensions[3]],
            itemChosen: false
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
      <Route exact path="/Audience" render={(props) => <Dimension1 renderNew={this.renderNew} handleDimensionBtnClick={this.handleDimensionBtnClick} itemChosen={this.state.itemChosen} dimension1={this.state.dimension1}/>} />
        <Route exact path="/Location" render={(props) => <Dimension2 renderNew={this.renderNew} handleDimensionBtnClick={this.handleDimensionBtnClick} itemChosen={this.state.itemChosen} dimension2={this.state.dimension2}/>} />
        <Route exact path="/Program" render={(props) => <Dimension3 renderNew={this.renderNew} handleDimensionBtnClick={this.handleDimensionBtnClick} itemChosen={this.state.itemChosen} dimension3={this.state.dimension3}/>}/>
        <Route exact path="/Issue" render={(props) => <Dimension4 renderNew={this.renderNew} handleDimensionBtnClick={this.handleDimensionBtnClick} itemChosen={this.state.itemChosen} dimension4={this.state.dimension4}/>} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/"  component={Dimensions}/>
        <Route exact path="/Review" render={(props) => <Review appState={this.state}/>} />
         
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
