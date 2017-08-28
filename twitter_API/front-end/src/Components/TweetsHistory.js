import React, { Component } from 'react';
import './styles/TweetsHistory.css';

class TweetsHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: JSON.parse(localStorage.history)
    }
  }

  render() {
    return (
      <div className='TweetsHistory'>
        <button onClick={() => this.props.onReturn()}>Back</button>
        <br />
        <button
          onClick={() => {
            localStorage.setItem('history', JSON.stringify([]));
            this.setState({
              history: []
            })
          }}>Delete all history</button>
        {this.state.history.map((item, index) => {
          return (
            <div className='tweets-block'>
              <p>Total tweets: <b>{item.tweets.length}</b> About: {item.token}</p>

              <button onClick={() => this.props.onReturn(item)}>Continue tracking with these tweets</button>

              <button onClick={() => {
              this.state.history.splice(index, 1);
              localStorage.history = JSON.stringify(this.state.history);
              this.setState({history: this.state.history.slice()})
              }}>Delete</button>
            </div>
          )
        })}
        {!this.state.history.length && <h1>History is empty.</h1>}
      </div>
    )
  }
}

export default TweetsHistory;