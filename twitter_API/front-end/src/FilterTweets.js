import React, { Component } from 'react';
import './FilterTweets.css';
import Tweet from './Tweet';

class FilterTweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetArray: [],
      filterByKeyWord: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({tweetArray: nextProps.tweets.slice()});
  }

  render() {
    let searchInput = '';
    const filteredArray = this.state.tweetArray.filter(tweet => tweet.text.includes(this.state.filterByKeyWord));
    return (
      <div className='FilterTweets'>
        <input type='search'
          className='input-filter'
          placeholder='Search for specific tweets...'
          ref={input => searchInput = input}
        />
        <button onClick={() => this.setState({filterByKeyWord: searchInput.value})}>Search</button> <br />
        <div className='filtered-content'>
          <p>Tweets found: <strong>{filteredArray.length}</strong></p>
          {filteredArray.map(tweet => <Tweet author={tweet.user.name} username={tweet.user.screen_name} text={tweet.text}/>)}
        </div>
      </div>
    )
  }
}


export default FilterTweets;