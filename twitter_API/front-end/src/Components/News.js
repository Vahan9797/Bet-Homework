import React, { Component } from 'react';
import './styles/News.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      name: '',
      url: '',
      desc: '',
      nameOfProvider: '',
      datePublished: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.src && this.setState({
      imageUrl: nextProps.src.image.thumbnail.contentUrl,
      name: nextProps.src.name,
      url: nextProps.src.url,
      desc: nextProps.src.description,
      nameOfProvider: nextProps.src.provider.name,
      datePublished: nextProps.src.datePublished
    })
  }

  render() {
    return (
      <div className='News'>
        <img src={this.state.imageUrl} alt='News img'/>
        <div className='news-desc'>
          <a href={this.state.url}>{this.state.name}</a>
          <i>{this.state.desc}</i>
          <small>Official source: {this.state.nameOfProvider} Posted on: {this.state.datePublished}</small>
        </div>
      </div>
    )
  }
}

export default News;