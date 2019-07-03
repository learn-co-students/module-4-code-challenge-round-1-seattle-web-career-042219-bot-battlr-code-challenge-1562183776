import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  displaySelected = () => {
    let newArray = [];
    if (this.props.selectedBots.length > 0) {
      newArray = this.props.selectedBots.map((bot) =>
        <BotCard key={bot.id} bot={bot} onHandleSelect={this.props.onHandleRemove}/>
      )
    }
    return newArray;
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              this.displaySelected()
            }

          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
