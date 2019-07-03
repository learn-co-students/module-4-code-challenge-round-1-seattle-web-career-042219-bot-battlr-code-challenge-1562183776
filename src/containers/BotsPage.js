import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

  state = {
    botsCollection: [],
    yourBots: []
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({ botsCollection: bots }))
  }

  migrateBot = (bot) => {
    console.log(bot)

    if (this.state.yourBots.includes(bot)) {
      console.log('success')
      this.setState(state => {
        let botIndex = this.state.yourBots.indexOf(bot);
        const yourBots = state.yourBots.filter((item, j) => botIndex !== j);
        return {
          yourBots
        }
      })

    } else {
      this.setState(state => {
        const yourBots = state.yourBots.concat(bot);
        return {
          yourBots
        }
      })
    }
  }

  componentDidMount(){
    this.fetchBots()
  }

  render() {
    console.log(this.state.yourBots)
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} botsCollection={this.state.botsCollection} migrateBot={this.migrateBot} />
        <BotCollection migrateBot={this.migrateBot} botsCollection={this.state.botsCollection} yourBots={this.state.yourBots} />
      </div>
    );
  }

}

export default BotsPage;
