import React, { Component } from 'react';
import ShortTermView from './ShortTermView'
import '../App.css'
import {Grid, Header, Button} from 'semantic-ui-react'
import Iframe from 'react-iframe'
import Ethereum from './data/Ethereum'
import BitCoin from './data/Bitcoin'
import Ripple from './data/Ripple'
import LiteCoin from './data/LiteCoin'
import BitcoinCash from './data/BitCoinCash'

import EthereumGraph from './graphs/EthereumGraph'
import BitCoinGraph from './graphs/BitCoinGraph'
import LiteCoinGraph from './graphs/LiteCoinGraph'
import RippleGraph from './graphs/RippleGraph'
import BitCoinCashGraph from './graphs/BitCoinCashGraph'


class MultiLineChart extends Component {

  render() {
    console.log({Ethereum})
     return (
      <div className="multichart">
      <Header>View the Top 5 Currencies</Header><br/>
      <br/>
      <br/>
      <Grid>
        <Grid.Row centered>
        <EthereumGraph data={Ethereum} symbol={"ETH"} name={"Ethereum"} />
        <BitCoinGraph data={BitCoin} symbol={"BTC"} name={"BitCoin"} />
        <LiteCoinGraph data={LiteCoin} symbol={"LTC"} name={"LiteCoin"} />
        <br/>
        <br/>
        <RippleGraph data={Ripple} symbol={"XRP"} name={"Ripple"} />
        <BitCoinCashGraph data={BitcoinCash} symbol={"BCH"} name={"BitCoin Cash"} />

      </Grid.Row>
       </Grid>
       </div>
     )
   }
 }

export default MultiLineChart;
// <ShortTermView symbol={"BTC"} name={"BitCoin"}/>
// <ShortTermView symbol={"ETH"} name={"Ethereum"}/>
// <ShortTermView symbol={"XRP"} name={"Ripple"}/>
// <ShortTermView symbol={"BCH"} name={"BitcoinCash"}/>
