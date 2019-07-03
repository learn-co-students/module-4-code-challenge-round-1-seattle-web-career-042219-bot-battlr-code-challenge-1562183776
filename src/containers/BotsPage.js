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
  
  const editedBots = this.state.bots.filter((b =>{
    return b.id !== bot.id
  }))
  bot.inArmy =!bot.inArmy
  this.setState(prevState => ({
    bots: editedBots,
    botArmy: [...prevState.botArmy, bot]
  }), ()=> console.log(this.state.botArmy))
}

removeBot = bot => {
  bot.inArmy = !bot.inArmy
  console.log(bot, 'Remove has been hit')
  const editedArmy = this.state.botArmy.filter((b =>{
    return b.id !== bot.id
  }))
  this.setState(prevState => ({
    botArmy: editedArmy
 
  }), ()=> console.log(this.state.botArmy))
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
        <YourBotArmy bots={this.state.botArmy} onRemoveClick={this.removeBot}/>
        <BotCollection bots={this.state.bots} onBotClick={this.addBot}/>
      </div>
    );
  }

}

export default BotsPage;
