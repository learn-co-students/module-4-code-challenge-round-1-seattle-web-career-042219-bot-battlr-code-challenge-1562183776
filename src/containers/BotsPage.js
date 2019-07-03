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
        return null
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
        <YourBotArmy bots={this.state.yourBots}/>
        <BotCollection addBot={this.handleAddBot}collection={this.state.botCollection}/>
      </div>
    );
  }

}

export default BotsPage;
