import React, { Component } from 'react';
import WebSocket from 'react-websocket';
import './styles/Tweets.css';
import FilterTweets from './FilterTweets';
import SearchByTweet from './SearchByTweet';

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetArray: [],
      selectedTweet: undefined
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
        <WebSocket url='ws://localhost:3070' 
            onMessage={this.handleData.bind(this)}/>
        <FilterTweets tweets={this.state.tweetArray} onSelect={tweet => this.setState({selectedTweet: tweet})}/>
        <SearchByTweet tweet={this.state.selectedTweet}/>
        {this.state.selectedTweet && this.setState({selectedTweet: undefined})}
      </div>
    );
  }
}

export default Tweets;