import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      selectedBots: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
        data.map(bot => (bot.selected = false))
        this.setState({
          bots: data
        })
      }
    )
  }

  handleSelect = (bot) => {
    let array = this.state.selectedBots.slice();
    // if (bot.selected) {
    //   bot.selected = false;
    //   array.filter(function(item) {
    //     return item.selected === true;
    //   });
    // } else {
    //   bot.selected = true;
    //   array.push(bot);
    // }
    array.push(bot);

    this.setState({
      selectedBots: array
    })
  }

  handleRemove = (bot) => {
    let array = this.state.selectedBots.slice();
    var index = array.indexOf(bot);
    if (index > -1) {
      array.splice(index, 1);
    }
    this.setState({
      selectedBots: array
    }, () => {console.log(array)})
  }

  render() {
    return (
      <div>
        <YourBotArmy selectedBots={this.state.selectedBots} onHandleRemove={this.handleRemove}/>
        <BotCollection bots={this.state.bots} onHandleSelect={this.handleSelect}/>
      </div>
    );
  }

}

export default BotsPage;
