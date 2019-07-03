import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";

const BOT_URL= "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botsTeam: []
  }

componentDidMount() {
  this.fetchBots()
}

fetchBots = () => {
  fetch(BOT_URL)
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      bots: data
    })
  })
}

handleBotSelectTeam = (selectedBot) => {
  if (selectedBot.isSelected) {
    selectedBot.isSelected = false
  } else {
    selectedBot.isSelected = true
  }

  if (selectedBot.isSelected) {
  this.setState({
    botsTeam: this.state.botsTeam.concat(selectedBot)
  })
  } else {
    let newArray = this.state.botsTeam.filter(bot => bot !== selectedBot)
    this.setState({
      botsTeam: newArray
    })
  }
}

handleBotSelectList = (selectedBot) => {
  if (selectedBot.isSelected) {
    return
  } else {
    selectedBot.isSelected = true
  }

  if (selectedBot.isSelected) {
    this.setState({
      botsTeam: this.state.botsTeam.concat(selectedBot)
    })
    } else {
      return
    }
}
  


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botsTeam} handleBotSelect={this.handleBotSelectTeam}/>
        <BotCollection handleBotSelect={this.handleBotSelectList} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
