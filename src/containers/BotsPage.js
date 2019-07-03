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

  //This removes it from the list of your bots if you try to add from the index
  //Less lines of code and communicates to the user that cannot add it more than once
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
