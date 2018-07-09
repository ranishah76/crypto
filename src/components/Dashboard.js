
import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Header, Segment, Table, Input } from 'semantic-ui-react'
import BiggestGainers from './BiggestGainers.js'
import BiggestLosers from './BiggestLosers.js'
import '../App.css'

export default class Dashboard extends Component {
  state = {
    column: null,
    crypto: [],
    data: [],
    gainers: [],
    losers: [],
    direction: null,
    isLoaded: false,
    quantity: '',
    query: '',
    time: "percent_change_24h"
  }

  componentDidMount() {
  fetch('https://api.coinmarketcap.com/v2/ticker/?structure=array')
   .then(res => res.json())
   .then(json => this.setState({
     crypto: json.data,
     isLoaded: true,
     filtered: json.data,
     gainers: json.data,
     losers: json.data,
     search: ''
   }))
  }

  filterData = (searchTerm) => {
    if (this.state.isLoaded === true) {
    const filtered = this.state.crypto.filter((crypto) => {
        return crypto["name"].toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({
      filtered: filtered
    })
  } else {
     console.log("Loading")
    }
  }

  handleChange = (e) => {
    const searchTerm = e.target.value
    this.setState({ query: searchTerm })
    this.filterData(searchTerm)
  }

  handleSort = clickedColumn => () => {
    const { column, filtered, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        filtered: _.sortBy(filtered, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      filtered: filtered.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  sortbyprice = () => {
   let filtered = this.state.crypto.sort(function(a, b) {
      return  b["quotes"]["USD"]["price"] - a["quotes"]["USD"]["price"]
    })
    this.setState({
      filtered: filtered
    })
  }

  sortbyvolume = () => {
   let filtered = this.state.crypto.sort(function(a, b) {
      return  b["quotes"]["USD"]["volume_24h"] - a["quotes"]["USD"]["volume_24h"]
    })
    this.setState({
      filtered: filtered
    })
  }


  render() {
    const { column, filtered, direction } = this.state
    return (
      <div className="dashboard">
      <Header textAlign="center"> Cryptocurrencies </Header>
      <Header color='red' textAlign="center">Top 3 Biggest Losers </Header>
      <BiggestGainers/>


      <Header color='green' textAlign="center">Top 3 Biggest Gainers </Header>
      <BiggestLosers />


      <Header textAlign="center"> Or Search by Name.... </Header>
      <Input color='red' fluid onChange={this.handleChange} size='large' value={this.state.query} placeholder='Search via name...'/>
      <Header color='blue' textAlign="center">Top 100 Coins By Market Capitalization </Header>
      <Header color='blue' as='h6' textAlign="center">**filter by rank, name, symbol, supply </Header>
      <Button className="gainers" onClick={this.sortbyprice}> Price </Button>
      <Button className="gainers" onClick={this.sortbyprice}> Volume(24h) </Button>

      <Table sortable celled fixed size='small' inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'rank' ? direction : null}
              onClick={this.handleSort('rank')}
              width={1}
            >
              Rank
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'name' ? direction : null}
              onClick={this.handleSort('name')}
              width={1}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'symbol' ? direction : null}
              onClick={this.handleSort('symbol')}
              width={1}
            >
              Symbol
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_supply' ? direction : null}
              onClick={this.handleSort('total_supply')}
              width={1}
            >
              Total Supply
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'price' ? direction : null}
              onClick={this.handleSort('price')}
              width={1}
            >
              Price
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'volume_24h' ? direction : null}
              onClick={this.handleSort('volume_24h')}
              width={1}
            >
              Volume (24h)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'percent_change_1h' ? direction : null}
              onClick={this.handleSort('percent_change_1h')}
              width={1}
            >
              %1h
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'percent_change_24h' ? direction : null}
              onClick={this.handleSort('percent_change_24h')}
              width={1}
            >
              %24h
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'percent_change_7d' ? direction : null}
              onClick={this.handleSort('percent_change_7d')}
              width={1}
            >
              %7d
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body class="ui small table">
          {_.map(filtered, ({ rank, name, symbol, total_supply, quotes }) => (
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
