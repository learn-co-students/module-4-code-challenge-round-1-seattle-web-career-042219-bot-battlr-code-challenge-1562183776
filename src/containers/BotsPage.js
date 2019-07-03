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

  handleRemoveBot = (bot) => {
      if(this.state.yourBots.includes(bot)) {
        let newState = this.state.yourBots.filter(bbot => bbot.id !== bot.id)
        this.setState({
          yourBots: newState
        })
      } else {
        return null
      }
  }

  handleAddFromIndex = (bot) => {
    if (this.state.yourBots.includes(bot)) {
      return null
    } else {
      let newState = this.state.yourBots.concat(bot)
      this.setState({
        yourBots: newState
      })
    }
  }
  render() {
    //interestingly both the handleRemoveBot and handleAddFromIndex are the same function
    //however they have two different functionalities dependent on whether it is clicked on
    //index or the 'yourBots' section
    return (
      <div>
        
        <YourBotArmy removeBot={this.handleRemoveBot} bots={this.state.yourBots}/>
        <BotCollection addBot={this.handleAddFromIndex}collection={this.state.botCollection}/>
      </div>
    );
  }

}

export default BotsPage;
