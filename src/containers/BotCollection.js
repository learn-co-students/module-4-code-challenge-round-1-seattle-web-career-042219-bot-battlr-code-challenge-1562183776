import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">

    		  {this.props.bots.map((data) => {
            return <BotCard key={data.id}
              id={data.id}
              name={data.name}
              health={data.health}
              damage={data.damage}
              armor={data.armor}
              bot_class={data.bot_class}
              catchphrase={data.catchphrase}
              avatar_url={data.avatar_url} />})}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
