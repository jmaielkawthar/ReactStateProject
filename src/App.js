import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  state={
    count:0,
    isShow:true
  }
  

  handlePlus=()=>this.setState({count:this.state.count+1})
  handleMunis=()=>this.state.count>0?this.setState({count:this.state.count-1}):null
  handleShow=()=>this.setState({isShow:!this.state.isShow})
  componentDidMount(){
    console.log("componentDidMount")

  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
;
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
    console.log("render")
    // setInterval(this.handlePlus, 1000);

    return (
      <div>
        <button onClick={this.handleShow}>{this.state.isShow?"Hide":"Show"}</button>
      {
        this.state.isShow&&  <div>
        <h1>{this.state.count}</h1>
        
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMunis}>-</button>
        </div>
      }
      </div>
    )
  }
}
