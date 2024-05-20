import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      botArmy: []
    };
      this.loadBots()
  }


addBot = bot => {

  bot.inArmy =!bot.inArmy
  if (!bot.armyDiv){
  this.setState(prevState => ({
    botArmy: [...prevState.botArmy, bot]
  }), ()=> console.log(this.state.botArmy))
  bot.armyDiv = true
}else{
  return null
}
}

removeBot = bot => {
  bot.inArmy = !bot.inArmy;
  // const addtobots = [...this.state.bots, bot]
  const editedArmy = this.state.botArmy.filter((b =>{
    return b.id !== bot.id
  }));

  this.setState(prevState => ({
    botArmy: editedArmy
    // bots: addtobots
  }), ()=> console.log(this.state.botArmy))
  bot.armyDiv = false
}


loadBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res=>res.json())
      .then(data => {
      console.log(data)
      data.map(bot => (bot.inArmy = false));
      
      this.setState({bots: data})
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botArmy} botsavailable={this.state.bots} onBotClick={this.removeBot}/>
        <BotCollection bots={this.state.bots} onBotClick={this.addBot} />
      </div>
    );
  }

}

export default BotsPage;