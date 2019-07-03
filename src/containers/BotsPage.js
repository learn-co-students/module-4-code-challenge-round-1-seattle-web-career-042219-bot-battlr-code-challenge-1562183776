import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: []
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(res => {
      const botData = res.map(this.getBotData)
      this.setState({
        bots: botData
      })
    })
  }

  getBotData = (bot) => {
    return {
      id: bot.id,
      name: bot.name,
      health: bot.health,
      damage: bot.damage,
      armor: bot.armor,
      bot_class: bot.bot_class,
      catchphrase: bot.catchphrase,
      avatar_url: bot.avatar_url
    }
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} />
        <YourBotArmy bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
