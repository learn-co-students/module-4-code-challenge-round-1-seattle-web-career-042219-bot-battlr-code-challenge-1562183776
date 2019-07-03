import React from "react";
import BotCard from "../components/BotCard";
import BotPage from '../containers/BotCollection'

class BotCollection extends React.Component {
  //your code here


  render(){

    const allBots = this.props.bots.map(bot => {
      return <BotCard key={bot.id} handleBotClick={this.props.handleBotClick} bot={bot}/>
    })

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {allBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
