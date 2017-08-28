import React, { Component } from 'react';
//import logo from './logo.svg';
import Tweets from './Components/Tweets';
import TokenInput from './Components/TokenInput';
import './App.css';
import TweetsHistory from './Components/TweetsHistory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hasTrackingToken: false,
        tweetArray: [],
        historyView: false,
        historyIndex: 0
    }
    !localStorage.history && localStorage.setItem('history', JSON.stringify([]));
  }

  render() {
    return (
      <div className="App">
        {!this.state.hasTrackingToken && !this.state.historyView && <TokenInput
          onSelect={token => fetch(`http://localhost:8888/category/${token}`, {method: 'POST'}) && this.setState({
            hasTrackingToken: token
          })}
          historyIndex={this.state.historyIndex}
          onHistorySelect={() => this.setState({historyView: true})}
        />}
        {this.state.hasTrackingToken && <Tweets
          token={this.state.hasTrackingToken}
          tweets={this.state.tweetArray}
          onHistoryIndex={id => this.setState({historyIndex: id})}
          onKeyInputView={() => this.setState({hasTrackingToken: false})}
        />}
        {this.state.historyView && <TweetsHistory
          onReturn={data => {
            if(!data) {
              this.setState({historyView: false})
            } else {
              fetch(`http://localhost:8888/category/${data.token}`, {method: 'POST'});
              this.setState({
                hasTrackingToken: typeof data === 'object' && data.token,
                tweetArray: typeof data === 'object' && data.tweets,
                historyView: false,
                historyIndex: data.id
              });
            }
          }
        }
        />}
      </div>
    );
  }
}

export default App;
