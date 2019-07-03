import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.props.bots.map((bot) =>
					<BotCard key={bot.id} handleBotSelect={this.props.handleBotSelect} bot={bot}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
