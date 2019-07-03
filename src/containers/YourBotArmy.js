import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  constructor(){
    super()
    this.state = {
      selected: false
    }
  }

  handleClick= () => {
    this.setState(prevState => {
      return {selected: !prevState.selected}
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            <BotCard />
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
