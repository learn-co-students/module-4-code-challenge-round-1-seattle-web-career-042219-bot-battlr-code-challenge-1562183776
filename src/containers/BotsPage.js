import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      yourBots: [],
      botCollection: []
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(res => this.setState({
      botCollection: res
    }))
  }

  handleAddBot = (bot) => {
      if(this.state.yourBots.includes(bot)) {
        console.log("remove me")
        let newState = this.state.yourBots.filter(bbot => bbot.id !== bot.id)
        this.setState({
          yourBots: newState
        })
      } else {
        let newState = this.state.yourBots.concat(bot)
        this.setState({
          yourBots: newState
        })
      }
   
  }

  render() {
    return (
      <div>
        <YourBotArmy addBot={this.handleAddBot} bots={this.state.yourBots}/>
        <BotCollection addBot={this.handleAddBot}collection={this.state.botCollection}/>
      </div>
    );
  }

}

export default BotsPage;
