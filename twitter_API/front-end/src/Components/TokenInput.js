import React, { Component } from 'react';
import './styles/TokenInput.css';
import createGUID from './scripts/createGUID';

class TokenInput extends Component {

  saveLastSession() {
    const localHistory = localStorage.history && JSON.parse(localStorage.history);

    if(this.props.historyIndex) {
      if (localHistory && localStorage.lastSession) {
        localHistory.find(item => item.id === this.props.historyIndex).tweets = JSON.parse(localStorage.lastSession);
      }
    } else {
      localHistory && localStorage.lastSession && localHistory.unshift({
        id: createGUID(),
        token: localStorage.lastToken,
        tweets: JSON.parse(localStorage.lastSession)
      });
    }

    if (localHistory) {
      localStorage.history = JSON.stringify(localHistory || []);
      delete localStorage.lastSession;
      delete localStorage.lastToken;
    }
  }

  render() {
    let Input;
    this.saveLastSession();
    return (
      <div className='TokenInput'>
        <p className='input-desc'>
          Enter the category you want for Twitter API to track.<br />
          (for multiple categories separate them with comma <b>ONLY</b>. E.g. "sport,business,politics")
        </p>

        <input type='text'
          ref={input => Input = input}
          placeholder='Enter the category here...'
        />

        <button onClick={() => this.props.onSelect(Input.value)}>Send</button>
        <button onClick={() => this.props.onHistorySelect()}>Go to tracking History</button>
      </div>
    )
  }
}

export default TokenInput;