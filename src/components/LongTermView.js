import React, { Component } from 'react';
import moment from 'moment';
import '../App.css'
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import {  Header } from 'semantic-ui-react'


class Visualisations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null
    }
  }

  handleChartHover(hoverLoc, activePoint){
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }

  componentDidMount() {


    fetch(`https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${this.props.symbol}_USD/history?period_id=1MTH&time_start=2016-05-10T00:00:00`, {
      method: 'GET',
      headers: {
        "X-CoinAPI-Key": "621C7857-F61B-46BA-8813-CF91F7696346"
      }
      })
    .then(res => res.json())
    .then((json) => {
      const sortedData = [];
      let count = 0;
       json.map((crypto) => {
        sortedData.push({
          d: moment(crypto["time_period_start"]).format('MMM YY'),
          p: crypto["price_close"].toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
          x: count, //previous days
          y: crypto["price_close"] // numerical price
        });
        count++;
      })
      this.setState({
        data: sortedData,
        fetchingData: false
      })
    })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    })
  }


  render() {
     return (

       <div className='container'>
         <div className='row'>
           <Header textAlign="center">2 year {this.props.name} Price Chart</Header>
         </div>
         <div className='row'>
           <div className='popup'>
             {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
           </div>
         </div>
         <div className='row'>
           <div className='chart'>
             { !this.state.fetchingData ?
               <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
               : null }
           </div>
         </div>
       </div>

     );
   }
 }

export default Visualisations;
// fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-03-22')
// .then(res => res.json())
// .then((json) => {
//   const sortedData = [];
//   let count = 0;
//   for (let date in json.bpi){
//     sortedData.push({
//       d: moment(date).format('MMM DD'),
//       p: json.bpi[date].toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
//       x: count, //previous days
//       y: json.bpi[date] // numerical price
//     });
//     count++;
//   }
//   this.setState({
//     data: sortedData,
//     fetchingData: false
//   })
// })
