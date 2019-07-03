import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  render(){
    const yourBots = this.props.bots.map(bot => {
    	return <BotCard handleBotCollectionClick={this.props.handleBotCollectionClick} bot={bot} />
    })

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {yourBots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
