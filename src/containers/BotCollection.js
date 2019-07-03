import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  constructor(props){
    super(props)

  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
          {this.props.botArray.map((bot, i) => {
            return <BotCard removeBot={this.props.removeBot} addBot={this.props.addBot} key={i} botProps={bot} />
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
