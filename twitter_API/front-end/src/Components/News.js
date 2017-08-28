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
      imageUrl: !!nextProps.src.image && nextProps.src.image.thumbnail.contentUrl,
      name: nextProps.src.name,
      url: nextProps.src.url,
      desc: nextProps.src.description,
      nameOfProvider: !!nextProps.src.provider && nextProps.src.provider[0].name,
      datePublished: nextProps.src.datePublished
    })
  }

  render() {
    return (
      <div className='News'>
        {this.state.imageUrl && <img src={this.state.imageUrl} alt='News img'/>}
        <div className='news-desc'>
          <p><a href={this.state.url} target='_blank'>{this.state.name}</a></p>
          <i>{this.state.desc}</i><br />
          <small>Official source: <u><b>{this.state.nameOfProvider}</b></u>&nbsp;
            Posted on: <b>{this.state.datePublished}</b></small>
        </div>
      </div>
    )
  }
}

export default News;