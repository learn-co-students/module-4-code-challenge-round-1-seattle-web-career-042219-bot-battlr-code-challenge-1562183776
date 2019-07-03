import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  constructor(){
    super()
    this.state = {
      currentArmy: []
    }
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.props.botArmyArray.map((bot, i) => {
              return <BotCard addBot={this.addBotToArmy} removeBot={this.props.removeBot} key={i} botProps={bot} />
            })}

            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
