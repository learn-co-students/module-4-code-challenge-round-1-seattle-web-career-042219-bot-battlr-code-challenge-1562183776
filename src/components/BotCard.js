import React, { Component } from 'react';

export default class BotCard extends Component {
  // const { bot } = props;

  //thinking about changing this to a Class Component to save a state of whether it's been added
  //to the army

  constructor(props){
    super(props)
    if(this.props.botProps.id < 100){
      this.state = {
        inArmy: false
      }
    } else {
      this.state = {
        inArmy: true
      }
    }

  }


  handleClick = () => {
    let bot = this.props.botProps
    if(this.state.inArmy === false){
      this.props.addBot(bot)
      this.setState({
        inArmy: true
      })
    } else{
      this.props.removeBot(bot)
      this.setState({
        inArmy: false
      })
    }
  }

  render(){
  const bot = this.props.botProps

   let botType;

   switch (bot.bot_class) {
     case "Assault":
       botType = <i className="icon military" />;
       break;
     case "Defender":
       botType = <i className="icon shield" />;
       break;
     case "Support":
       botType = <i className="icon ambulance" />;
       break;
     default:
       botType = <div />;
   }
    return (
      <div className="ui column">
        <div
          className="ui card"
          key={bot.id}
          onClick={this.handleClick}
        >
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name} {botType}
            </div>

            <div className="meta text-wrap">
              <small>{bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {bot.health}
            </span>

            <span>
              <i className="icon lightning" />
              {bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {bot.armor}
            </span>
          </div>
        </div>
      </div>
    )
  }

};

// export default BotCard;
