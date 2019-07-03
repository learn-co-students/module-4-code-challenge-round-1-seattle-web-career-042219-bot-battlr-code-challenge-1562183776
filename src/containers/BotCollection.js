import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
    let bots = this.props.botsCollection.map(bot => (
      <BotCard key={bot.id} bot={bot} yourBots={this.props.yourBots} migrateBot={this.props.migrateBot} />
    ))

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
