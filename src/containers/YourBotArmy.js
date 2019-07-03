import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){

    let bots = this.props.yourBots.map(bot => (
        <BotCard key={bot.id} bot={bot} yourBots={this.props.yourBots} migrateBot={this.props.migrateBot} />
      )
    )

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
};

export default YourBotArmy;
