import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderBots = () => {
    let currentArmy = this.props.bots.filter(bot => {
      return this.props.enlistedBotIds.includes(bot.id)
    })

    return currentArmy.map(bot => {
      return <BotCard onBotClick={this.props.removeBot} key={bot.id} bot={bot} />
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
