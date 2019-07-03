import React from "react";
import BotCollection from '../containers/BotCollection';
import YourBotArmy from '../containers/YourBotArmy';

class BotsPage extends React.Component {

  state = {
    bots: [],
    yourBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => {
      this.setState({bots})
    })
  }

  handleBotClick = (bot) => {
    if(!this.state.yourBots.includes(bot)){
      this.setState({
        yourBots: [...this.state.yourBots, bot]
      })
    }
  }

  handleBotCollectionClick = (botObj) => {
    const currentState = {...this.state.yourBots}
    const newState = currentState.filter(bot => bot.id !== botObj.id)
    this.setState({
      yourBots: newState
    })
  }


  render() {
    return (
      <div className="App">
        <YourBotArmy handleBotCollectionClick={this.handleBotCollectionClick} bots={this.state.yourBots}/>
        <BotCollection handleBotClick={this.handleBotClick} bots={this.state.bots}/>
      </div>
    );
  }
}



export default BotsPage;
