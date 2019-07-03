import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.collection.map(bott => {
				 return  <BotCard key={bott.id}bot={bott} onChangeBot={this.props.addBot}/>
			  })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
