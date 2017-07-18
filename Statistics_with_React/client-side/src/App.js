import React, {Component} from 'react';
import './App.css';
import Stock from './Stock';
import PopUp from './PopUp';

const upArrow = 'https://thumb.ibb.co/bOd8AF/up_arrow.png';
const downArrow = 'https://thumb.ibb.co/is8VPa/down_arrow.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      triggerPopUp: [false, false, false]
    };
  }
  componentWillMount() {
    this.fetchStats('http://localhost:8888/prices');
  }

  componentDidMount() {
    setInterval(() => this.fetchStats('http://localhost:8888/prices'), 1000);
  }

  fetchStats(url) {
    return fetch(url)
    .then(response => response.json())
    .then(response => {

      if (!this.state.stocks.length) {
        this.state.stocks.push(...response.map(obj => new Stock(obj.name.toUpperCase(), [obj.stat.toString().substr(0, 7)])));
      } else {
        this.state.stocks.forEach((stock, index) => stock.stats.push(response[index].stat.toString().substr(0, 7)));
      }

      this.setState({
        stocks: this.state.stocks.slice()
      });
    });
  }

  render() {
    return (
      <div className='App'>
        <span className='inline-display'>
          {
            this.state.stocks.map((stock, index) => <div className='stock-container' onClick={() => {
              this.setState({triggerPopUp: this.state.triggerPopUp.map((flag, i) => (i === index) ? !flag : flag)});
            }}>
              <p>{stock.name}: {stock.newStat}</p>
              <img src={stock.newStat < stock.prevStat ? downArrow : upArrow} height='40px' width='40px' alt='stats'/>
              {this.state.triggerPopUp[index] ? <PopUp newStat={this.state.stocks[index].newStat}/> : null}
            </div>)
          }
        </span>
      </div>
      )
  }
}

export default App;
