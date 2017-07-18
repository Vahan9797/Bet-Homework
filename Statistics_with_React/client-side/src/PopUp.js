import React, {Component} from 'react';
import './PopUp.css';

class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            viewType: 'list-view'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state.list.unshift({date: new Date().toLocaleTimeString(), stat: nextProps.newStat})
        this.setState({
            list: this.state.list.slice()
        })
    }

    showList() {
        this.state.viewType !== 'list-view' && this.setState({viewType: 'list-view'});
    }

    showChart() {
        this.state.viewType !== 'chart-view' && this.setState({viewType: 'chart-view'});
    }

    render() {
        return (
            <div className='PopUp'>
                <button className='list-view-btn' onClick={() => this.showList()}>List View</button>
                <button className='chart-view-btn' onClick={() => this.showChart()}>Chart View</button>
                <ul  className='stat-container'>
                    {this.state.viewType === 'list-view' ? this.state.list.map(stock => <li>
                        {stock.date}: {stock.stat}
                    </li>) : <p>IN DEVELOPMENT</p>}
                </ul>
            </div>
        )
    }
}

export default PopUp;