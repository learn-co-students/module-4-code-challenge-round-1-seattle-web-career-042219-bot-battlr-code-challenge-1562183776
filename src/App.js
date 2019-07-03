import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  constructor(){
    super()
    this.state = {
      bots: [],
      enlistedBotIds: [102, 104]
    }
    this.loadBots()
  }

  enlistBot = (id) => {
    this.state.enlistedBotIds.push(id)
    this.setState(this.state)
  }

  removeBot = (id) => {
    
    let newArmy = this.state.enlistedBotIds.filter(enlisted => enlisted !== id)
    this.setState({
      enlistedBotIds: newArmy
    })
  }
 

  loadBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(json => {
        this.setState({ bots: json });
        
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage enlistedBotIds={this.state.enlistedBotIds} bots={this.state.bots} removeBot={this.removeBot} enlistBot={this.enlistBot}/>
      </div>
    );
  }
}

export default App;
