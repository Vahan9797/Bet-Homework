import React, { Component } from 'react';
import WebSocket from 'react-websocket';
import './styles/Tweets.css';
import FilterTweets from './FilterTweets';
import SearchByTweet from './SearchByTweet';
import TweetsHistory from './TweetsHistory';


class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetArray: this.props.tweets || [],
      selectedTweet: undefined,
      historyView: false
    };

    localStorage.lastToken = this.props.token;
  }

  handleData(data) {
    const tweetArray = this.state.tweetArray;
    const resData = JSON.parse(data);
    tweetArray.unshift(resData);
    //console.log(resData.user.name, '>>>', '@' + resData.user.screen_name, '>>>', resData.text);
    localStorage.lastSession = JSON.stringify(tweetArray);
    this.setState({
      tweetArray: tweetArray.slice()
    });
  }

  render() {
    return (
      <div className='Tweets'>
        <button
          onClick={() => this.props.onKeyInputView() || this.setState({tweetArray: []})}>
          Stop current tracking and go back to keyword input</button>

        {!this.state.historyView && <div className='tweets-container'>
          <FilterTweets
            tweets={this.state.tweetArray}
            onSelect={tweet => this.setState({selectedTweet: tweet})
          }/>
          <SearchByTweet tweet={this.state.selectedTweet}/>
          {this.state.selectedTweet && this.setState({selectedTweet: undefined})}
        </div>}

        <WebSocket url='ws://localhost:3070'
          onMessage={this.handleData.bind(this)}/>

        {!this.state.historyView && <button
          onClick={() => this.setState({historyView: true})}>Watch the history of tracking.</button>
        }

        {this.state.historyView && <TweetsHistory
          onReturn={data => {
            if (!data) {
              this.setState({historyView: false})
            } else {
              fetch(`http://localhost:8888/category/${data.token}`, {method: 'POST'});
              this.setState({
                historyView: false,
                tweetArray: data.tweets
              });
              this.props.onHistoryIndex(data.id);
            }
          }}
        />}
      </div>
    );
  }
}

export default Tweets;