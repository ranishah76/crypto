import React, { Component } from 'react';
import {  Card, Image, Button, Modal } from 'semantic-ui-react'
import ShortTermView from './ShortTermView'
import LongTermView from './LongTermView'

class CryptoCard extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
     <div className="card">
     <Card>
      <Card.Content textAlign="center">
      <Image src={require(`../assets/icon/${this.props.symbol.toLowerCase()}.png`)} size='mini' />
          <Card.Header> {this.props.symbol}</Card.Header>
          <Card.Meta>{this.props.name}</Card.Meta>
          <Card.Description>Rank: {this.props.rank}</Card.Description>
          <Card.Description>Price: ${this.props.price.toFixed(2)}</Card.Description>
          <Card.Description>{this.props.change}% (7d) </Card.Description>
          <br/>
          <Modal trigger={<Button size='mini'>Short Term View</Button>}>
          <Modal.Content>
          <ShortTermView symbol={this.props.symbol} name={this.props.name}/>
          <Modal.Description textAlign="center">**data from the coinbase exchange</Modal.Description>
          </Modal.Content>
          </Modal>
        <Modal trigger={<Button size='mini'>Long Term View</Button>}>
        <Modal.Content>
        <LongTermView symbol={this.props.symbol} name={this.props.name}/>
        <Modal.Description textAlign="center">**data from the coinbase exchange</Modal.Description>
        </Modal.Content>
      </Modal>
        </Card.Content>
        </Card>

      </div>
    )
  }
}

export default CryptoCard;
