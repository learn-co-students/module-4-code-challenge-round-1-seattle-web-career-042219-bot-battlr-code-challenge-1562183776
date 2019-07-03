import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"


class BotsPage extends React.Component {
  //start here with your code for step one


 

  render() {
    return (
    
      <div>
        <YourBotArmy bots={this.props.bots} enlistedBotIds={this.props.enlistedBotIds} removeBot={this.props.removeBot}/>
        <BotCollection bots={this.props.bots} enlistBot={this.props.enlistBot} />
      </div>
    );
  }
}

export default BotsPage;
