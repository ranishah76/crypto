import React, { Component } from 'react';
import Iframe from 'react-iframe'
import Ethereum from './aframe/Ethereum'
import Ripple from './aframe/Ripple'
import Bitcoin from './aframe/Bitcoin'
import {Grid, Header, Button} from 'semantic-ui-react'
import '../App.css'

class VisualisationIframe extends Component {

  state = {
    supply: 17103613,
    name: "bitcoin",
    symbol: "BTC"
  }

  bitcoinsupply = () => {
    this.setState({
      supply: 17105187,
      name: "bitcoin",
      symbol: "BTC"
    })
  }
  ethereumsupply = () => {
    this.setState({
      supply: 100199510,
      name: "ethereum",
      symbol: "ETH"
    })
  }
  ripplesupply = () => {
    this.setState({
      supply: 39245304677,
      name: "ripple",
      symbol: "XRP"
    })
  }
  litecoinsupply = () => {
    this.setState({
      supply: 57065403,
      name: "litecoin",
      symbol: "LTC"
    })
  }

  render() {
     return (
        <div>
        <Header> Circulating Supply </Header>
        <Grid>
          <Grid.Row centered>
            <button className="fomobutton" onClick={this.bitcoinsupply}> BitCoin </button>
            <button className="fomobutton" onClick={this.ethereumsupply}> Ethereum </button>
            <button className="fomobutton" onClick={this.ripplesupply}> Ripple </button>
            <button className="fomobutton" onClick={this.litecoinsupply}> Litecoin </button>
            </Grid.Row>
         </Grid>
           <h3 className="blocks"> Currency: {this.state.name} | Circulating Supply: { this.state.supply.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} {this.state.symbol}</h3>
           <Iframe width="2000px" height="800px" url={`http://localhost:3001/${this.state.name}`} />
        </div>
     )
   }
 }

export default VisualisationIframe;



  // componentDidMount() {
  //   fetch(`https://rest.coinapi.io/v1/ohlcv/COINBASE_SPOT_BTC_USD/history?period_id=1MIN&time_start=2018-05-10T00:00:00`, {
  //     method: 'GET',
  //     headers: {
  //       "X-CoinAPI-Key": "A7384D3D-7F8F-4A7C-BA65-D260FD7FE00F"
  //     }
  //     })
  //   .then(res => res.json())
  //   .then((json) => console.log(json))
  // }
    // <NewVisualisation />
  // </Iframe>
