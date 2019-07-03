import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army
            {this.props.bots.map((bot, index) => {
              return <BotCard key={index} bot={bot} onRemoveClick={this.props.onRemoveClick} bots={this.props.bots} armyDiv={true}/>
             })}
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;