import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      bots: [],
      enlistedBotIds: []
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
      <div>
        <YourBotArmy bots={this.state.bots} enlistedBotIds={this.state.enlistedBotIds} removeBot={this.removeBot}/>
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} />
      </div>
    );
  }

}

export default BotsPage;
