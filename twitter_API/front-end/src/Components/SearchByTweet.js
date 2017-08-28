import React, { Component } from 'react';
import './styles/SearchByTweet.css';
import Tweet from './Tweet';
import News from './News';

const NEWS_API_KEYS =  {
  key1: '3fd0c983ae294ebbb8faf2fe367de704',
  key2: '2a16157d1ccd4725948237cc7d8e066d'
};

class SearchByTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTweets: [],
      newsFound: []
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.tweet && this.state.selectedTweets.unshift(nextProps.tweet) && this.setState({
      selectedTweets: this.state.selectedTweets.slice()
    });
  }

  searchForNews(text) {
    const formattedText = text.split(' ').filter(string => {
      return !(string[0] === '#' || string.slice(0, 4) === 'http' || string[0] === '@');
    }).join('+');

    fetch(`https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=${formattedText}&mkt=en-us`, {
      headers: {
        'Ocp-Apim-Subscription-Key': NEWS_API_KEYS.key1,
        'Host': 'api.cognitive.microsoft.com'
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({newsFound: response.value.slice()})
      })
  }

  onDelete(index) {
    const selectedTweets = this.state.selectedTweets;

    selectedTweets.splice(index, 1);
    this.setState({
      selectedTweets: selectedTweets.slice()
    });
  }

  render() {
    return (
      <div className='SearchByTweet'>
      <span className='selected-tweets'>Selected tweets: <b>{this.state.selectedTweets.length}</b></span>
        <div className='tweet-blocks'>
          {this.state.selectedTweets.map((tweet, index) => {
            return (
              <div className='tweet-block'>
                <Tweet author={tweet.author}
                  username={tweet.username}
                  text={tweet.text}
                  onClick={tweet => console.log(tweet)}/>

                <button onClick={() => this.searchForNews(tweet.text)}
                  >Search News about this tweet</button>
                <button 
                  className = 'remove-btn'
                  onClick={() => this.onDelete(index)}>Remove from list</button>
              </div>
            )
          })}
        </div>
          <span className='news-found'>News Found: <b>{this.state.newsFound.length}</b></span>
        <div className='search-results'>
          {this.state.newsFound.map(news => <News src={news} />)}
        </div>
      </div>
    )
  }
}

export default SearchByTweet;