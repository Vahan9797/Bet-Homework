import React, { Component } from 'react';
import './styles/FilterTweets.css';
import Tweet from './Tweet';

class FilterTweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetArray: [],
      filterByKeyWord: '',
      showTweets: 50
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({tweetArray: nextProps.tweets.slice()});
  }

  showMaxTweets(tweets) {
    return tweets.length < this.state.showTweets ? tweets : tweets.slice(0, this.state.showTweets)
  }

  render() {
    let searchInput = '';
    const filteredArray = this.state.tweetArray.filter(tweet => tweet.text.includes(this.state.filterByKeyWord));
    return (
      <div className='FilterTweets'>
        <span className='total-tweets'>Total Tweets: <strong>{this.state.tweetArray.length}</strong></span>
        <input type='search'
          className='input-filter'
          placeholder='Search for specific tweets...'
          ref={input => searchInput = input}/>

        <button onClick={ev => {
          this.setState({filterByKeyWord: searchInput.value, showTweets: 50});
        }}>Search</button><br />

        <div className='filtered-content'>
          {!!this.state.filterByKeyWord && <p>Tweets found: <strong>{filteredArray.length}</strong></p>}

          {this.showMaxTweets(filteredArray).map((tweet, index) => {
            return (<Tweet author={tweet.author}
              username={tweet.username}
              text={tweet.text}
              onClick={thisTweet => this.props.onSelect(thisTweet)}/>)
          })}

          {this.showMaxTweets(filteredArray).length === this.state.showTweets && <button onClick={ev => {
            this.setState({showTweets: this.state.showTweets + 50});
          }}>Show more...</button>}
        </div>

      </div>
    )
  }
}


export default FilterTweets;
