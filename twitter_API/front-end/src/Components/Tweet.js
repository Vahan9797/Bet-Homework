import React, { Component } from 'react';
import './styles/Tweet.css';

const editText = str => {
  if (str[0] === '@') {
    return (<b>&nbsp;
      <a href={'https://twitter.com/' + str.slice(1, (str[str.length - 1] === ':' ? -1 : undefined))}
        target='_blank'
        onClick={ev => ev.stopPropagation()}>{str}</a>
    &nbsp;</b>)
  } else if (str.substr(0, 4) === 'http') {
    return (<span>&nbsp;<a href={str} target='_blank' onClick={ev => ev.stopPropagation()}>{str}</a>&nbsp;</span>)
  } else if (str[0] === '#') {
    return (<span>&nbsp;
      <a href={'https://twitter.com/hashtag/'+ str.substring(1) +'?src=hash'}
        target='_blank'
        onClick={ev => ev.stopPropagation()}>{str}</a>
    &nbsp;</span>)
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
      <div className='Tweet' onClick={() => this.props.onClick(this.state)}>

        <p>Written by <b>{this.state.author}</b> with username:&nbsp;
        <a href={'https://twitter.com/' + this.state.username}
          target='_blank' 
          onClick={ev => ev.stopPropagation()}>@{this.state.username}</a></p>

        <p className='text-container'>
          {this.state.text.split(' ').map(str => editText(str))}
        </p>

      </div>
    )
  }
}

export default Tweet;