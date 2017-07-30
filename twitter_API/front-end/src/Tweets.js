import React, { Component } from 'react';
import WebSocket from 'react-websocket';
import './Tweets.css';
import Filtertweets from './FilterTweets';

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetArray: []
    }
  }

  handleData(data) {
    const tweetArray = this.state.tweetArray;
    const resData = JSON.parse(data);
    tweetArray.unshift(resData);
    console.log(resData.user.name, '>>>', '@' + resData.user.screen_name, '>>>', resData.text);
    this.setState({
      tweetArray: tweetArray.slice()
    });
  }

  render() {
    return (
      <div className='Tweets'>
        Total Tweets: <strong>{this.state.tweetArray.length}</strong>

        <WebSocket url='ws://localhost:3070' 
            onMessage={this.handleData.bind(this)}/>
        <Filtertweets tweets={this.state.tweetArray}/>
      </div>
    );
  }
}

export default Tweets;