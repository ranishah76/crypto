import React, { Component } from 'react';
import moment from 'moment';
import LineChart from '../LineChart';
import ToolTip from '../ToolTip';
import {  Header } from 'semantic-ui-react'
const sortedData = []

class ShortTermView extends Component {

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

    let count = 0
     this.props.data.map((crypto) => {
      return sortedData.push({
          d: moment(crypto["time_period_start"]).format('MMM DD'),
          p: crypto["price_close"].toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
          x: count++, //previous days
          y: crypto["price_close"] // numerical price
      })
    })
    this.setState ({
      data: sortedData,
      fetchingData: false
    })
}

  render() {
    console.log(this.props.data)
     return (

       <div className='container'>
         <div className='row'>
           <Header textAlign="center">30 Day {this.props.name} Price Chart</Header>
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

export default ShortTermView;
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
