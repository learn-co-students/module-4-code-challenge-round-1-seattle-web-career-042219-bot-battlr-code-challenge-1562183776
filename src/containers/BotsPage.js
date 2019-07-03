import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
    super()
    this.state = {
      botList: [],
      botArmy: []
    }
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res=>res.json())
    .then(result => this.setState({botList: result}))
  }

  removeBotFromArmy = (bot) => {
    let newArray = this.state.botArmy
    let index = newArray.indexOf(bot)
    if (index !== -1) {
      newArray.splice(index, 1);
      this.setState({botArmy: newArray});
    }


  }

  addBotToArmy = (bot) => {
    let joinedArmy = this.state.botArmy.concat(bot)
    this.setState(prevState => ({
      botArmy: joinedArmy,
    }))
    console.log('finished changing state')

    let newArray = this.state.botList
    let index = newArray.indexOf(bot)
    if (index !== -1) {
      newArray.splice(index, 1);
      this.setState({botList: newArray});
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy addBot={this.addBotToArmy} removeBot={this.removeBotFromArmy} botArmyArray={this.state.botArmy}/>
        <BotCollection removeBot={this.removeBotFromArmy} addBot={this.addBotToArmy} botArray={this.state.botList} />
      </div>
    );
  }

}

export default BotsPage;
