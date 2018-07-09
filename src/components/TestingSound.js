import React, { Component } from 'react';
import {Grid, Header, Button} from 'semantic-ui-react'
import '../App.css'
import dollar from '../assets/Dollar.mp3'

const keyList = [
  { number: 60, label: 'C' },
  { number: 65, label: 'F' },
  { number: 67, label: 'G' }
];


class VisualisationIframe extends Component {

  componentDidMount() {
    this.audioContext = new AudioContext ()
    let oscillator = this.audioContext.createOscillator()
    oscillator.start()

  }

  componentwillUnmount() {
    this.audioContext.close()
  }


  render() {
     return (
        <div>
        <Header> Want to find out what BitCoin sounds like? </Header>
        <Grid>
          <Grid.Row centered>
            <button className="fomobutton" onClick={this.bitcoinsupply}> PlayMe </button>
            </Grid.Row>
         </Grid>
         <img className="visualiser" src={require(`../assets/visualiser.gif`)}  />
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
