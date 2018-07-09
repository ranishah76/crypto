import React, { Component } from 'react';
import './FallingMoney.css';
import { Header } from 'semantic-ui-react'
import Sound from 'react-sound';
import dollar from '../assets/Dollar.mp3'

class FallingMoney extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentrate: '',
      className: ''
    }
  }

  playSong = () => {
    return Sound.status.PLAYING
  }

  handlePause = () => {
    return Sound.status.PAUSED
  }

  componentDidMount = () => {
    fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
      method: "GET",
      headers: {
        "X-CoinAPI-Key": "621C7857-F61B-46BA-8813-CF91F7696346"
      }
    })
    .then(res => res.json())
    .then(json => this.setState({
      currentrate: json.rate
    }, () => {
      this.changeclassname();
    }))
    // this.changeclassname()
  }

  getotal = () => {
    let currentrate = this.state.currentrate
    let pastrate = this.props.location.state.state.rate
    let amount = this.props.location.state.state.amount
    let difference = currentrate - pastrate
    let totalamount = amount * (difference/pastrate)
    console.log(totalamount)
    if (totalamount > amount) {
       return "You would have " + "made " + `$${totalamount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`    }
    else if (Math.abs(totalamount) > amount ) {
      return "You would have lost it all"
    } else {
      return "You would have lost " + `$${totalamount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    }
  }


  changeclassname = () => {
    let currentrate = this.state.currentrate
    let pastrate = this.props.location.state.state.rate
    let amount = this.props.location.state.state.amount
    let totalamount = amount * (currentrate - pastrate)
    console.log(this.state)
    if (totalamount <= 0) {
      this.setState({
        className:'falling-hands-span'
      })
    } else {
      this.setState({
        className:'falling-money-span'
      })
    }
  }

  render() {
    console.log(this.state.className)
    console.log(this.state.currentrate)
    console.log(this.props.location.state.state.rate)
    console.log(this.props.location.state.state.amount)

    return (
      <div>
      <Sound url={dollar} playStatus={Sound.status.PLAYING} playFromPosition={300 /* in milliseconds */} onLoading={this.handleSongLoading}
             onPlaying={this.handleSongPlaying} onFinishedPlaying={this.handleSongFinishedPlaying} />

        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <span className={this.state.className} />
        <div className="fomo">
        <h1 className="lowerheader" textAlign="center"> {this.getotal()} ! </h1>
        <h1 className="lowerheader" textAlign="center"> #FOMO </h1>
        </div>
    </div>
    )
  }

}

export default FallingMoney;
