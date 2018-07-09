import React, { Component } from 'react';
import FallingMoney from './FallingMoney'
import { Image, Grid, Header, Button, Form } from 'semantic-ui-react'
import {  Link } from 'react-router-dom'
import '../App.css'

class ExtremeFomo extends Component {

 constructor() {
   super()

  this.state = {
     amount: '',
     date: "",
     rate: ''
   }

 }

  handleChange = (e) => {
    let amount = e.target.value
    this.setState({
      amount: amount
    })
  }

  handleDate = (e) => {
    let date = e.target.value
    console.log(date)
    this.setState({
      date: date
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let date = this.state.date
    fetch(`https://rest.coinapi.io/v1/exchangerate/BTC/USD?time=${date}T09:00:00`, {
      method: "GET",
      headers: {
        "X-CoinAPI-Key": "621C7857-F61B-46BA-8813-CF91F7696346"
      }
    })
    .then(res => res.json())
    .then(json => this.setState({
        rate: json.rate
    }, () => {

      this.props.history.push(
        '/fallingmoney', {
          state: {
            rate: this.state.rate,
            amount: this.state.amount
          }
        }
      )
    }))
  }

  render() {
    return (
      <div className="extremefomo">
      <h1 className="extremefomo">Find out how much</h1>
      <img src={require(`../assets/bitcoincoin.png`)} className="bitcoinimage" />
      <h1 className="lowerheader"> you could have made, if you bought BitCoin .....</h1>
      <img src={require(`../assets/icon/btc.png`)} size='mini' />
      <Grid>
          <Grid.Row centered>
              <Grid.Column width={10}>
              <form className="hello" onSubmit={this.handleSubmit}>
                <label className="hello">
                  Amount ($):
                  <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
                </label>
                <label className="hello">
                  Date:
                  <input className="hello" name="date" type="date" value={this.state.date} onChange={this.handleDate} />
                </label>
                <br />
                <input className="fomobutton" type="submit" value="Submit" />
              </form>
              </Grid.Column>
          </Grid.Row>
      </Grid>
      </div>
    )
  }

}

export default ExtremeFomo;
