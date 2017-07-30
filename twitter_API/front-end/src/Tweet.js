import React, { Component } from 'react';
import './Tweet.css';

const editText = str => {
  if (str[0] === '@') {
    return (<b> {str} </b>)
  } else if (str.substr(0, 4) === 'http') {
    return (<a href={str} target='_blank'> {str} </a>)
  } else if (str[0] === '#') {
    return (<span> <span style={{color: 'blue', textDecoration: 'underline'}}>{str}</span> </span>)
  } else {
    return (' ' + str + ' ')
  }
}

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      username: '',
      text: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      author: nextProps.author,
      username: nextProps.username,
      text: nextProps.text
    })
  }

  render() {
    return (
      <div className='Tweet'>
        <p>Written by author <b>{this.state.author}</b> with username: <b>@{this.state.username}</b></p>
        <p className='text-container'>
          {this.state.text.split(' ').map(str => editText(str))}
        </p>
      </div>
    )
  }
}

export default Tweet;