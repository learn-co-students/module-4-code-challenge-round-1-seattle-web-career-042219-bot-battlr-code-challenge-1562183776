import React from "react";
import BotCard from "../components/BotCard";
// import BotsPage from "./BotsPage";

class YourBotArmy extends React.Component {
  //your bot army code here...

  

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map((bot, index) => {
              return <BotCard key={index} bot={bot} handleBotSelect={this.props.handleBotSelect}/>
            })
              }
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
