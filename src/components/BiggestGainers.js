
import _ from 'lodash'
import React, { Component } from 'react'
import { Header, Button, Segment, Table, Input } from 'semantic-ui-react'
import '../App.css'
export default class BiggestGainers extends Component {
 constructor(props) {
   super(props)
 }

 state = {
   data: [],
   gainers: [],
   isLoaded: false,
   time: "percent_change_1h"
 }

 componentDidMount() {
 fetch('https://api.coinmarketcap.com/v2/ticker/?structure=array')
  .then(res => res.json())
  .then(json => this.setState({
    isLoaded: true,
    data: json.data,
    gainers: json.data,
  }))
 }

 sortgainers = () => {
   let time=this.state.time
  let sorted = this.state.data.sort(function(a, b) {
     return a["quotes"]["USD"][`${time}`] - b["quotes"]["USD"][`${time}`]
   })
   return sorted
 }

 handle1h = () => {
   this.setState({
     time: "percent_change_1h"
   })
 }
 handle24hour = () => {
   this.setState({
     time: "percent_change_24h"
   })
 }
 handle7d = () => {
   this.setState({
     time: "percent_change_7d"
   })
 }

render() {
  console.log(this.props.time)
  const { column, gainers, direction } = this.state
  return (
    <div className="dashboard">
    <div className="choice"><Button className="gainers" onClick={this.handle1h}> 1h </Button> <Button className="gainers"  onClick={this.handle24hour}> 24h </Button><Button className="gainers" onClick={this.handle7d}> 7d </Button></div>
<Table sortable celled fixed size='small' inverted>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell
      width={1}
    >
      Rank
    </Table.HeaderCell>
    <Table.HeaderCell
      width={1}
    >
      Name
    </Table.HeaderCell>
    <Table.HeaderCell
      width={1}
    >
      Symbol
    </Table.HeaderCell>
    <Table.HeaderCell
      width={1}
    >
      Total Supply
    </Table.HeaderCell>
    <Table.HeaderCell
      width={1}
    >
      Price
    </Table.HeaderCell>
    <Table.HeaderCell
      width={1}
    >
      Volume (24h)
    </Table.HeaderCell>
    <Table.HeaderCell
      width={1}
    >
      %1h
    </Table.HeaderCell>
    <Table.HeaderCell

      width={1}
    >
      %24h
    </Table.HeaderCell>
    <Table.HeaderCell

      width={1}
    >
      %7d
    </Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body class="ui small table">
  {_.map(this.sortgainers().slice(0, 3), ({ rank, name, symbol, total_supply, quotes }) => (
    <Table.Row key={name}>
      <Table.Cell>{rank}</Table.Cell>
      <Table.Cell><a href={`https://coinmarketcap.com/currencies/${name}/`}>{name}</a></Table.Cell>
      <Table.Cell>{symbol}</Table.Cell>
      <Table.Cell>{total_supply.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Table.Cell>
      <Table.Cell> $ {quotes["USD"]["price"]}</Table.Cell>
      <Table.Cell> {quotes["USD"]["volume_24h"] > 1000 ? quotes["USD"]["volume_24h"] : quotes["USD"]["volume_24h"].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Table.Cell>
      <Table.Cell positive={quotes["USD"]["percent_change_1h"] > 0} negative={quotes["USD"]["percent_change_1h"] < 0}> {quotes["USD"]["percent_change_1h"]} %</Table.Cell>
      <Table.Cell positive={quotes["USD"]["percent_change_24h"] > 0} negative={quotes["USD"]["percent_change_24h"] < 0}> {quotes["USD"]["percent_change_24h"]} %</Table.Cell>
      <Table.Cell positive={quotes["USD"]["percent_change_7d"] > 0} negative={quotes["USD"]["percent_change_7d"] < 0}> {quotes["USD"]["percent_change_7d"]} %</Table.Cell>
    </Table.Row>
  ))}
</Table.Body>
</Table>
  </div>
    )
   }

}
