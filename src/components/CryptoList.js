import React, { Component } from 'react';
import { Header, Container, Card} from 'semantic-ui-react';
import CryptoCard from './CryptoCard'


class CryptoList extends Component {

  state = {
    cryptocurrencies: [],
    isLoaded: false
      // crypto: {
      //   circulating_supply: '',
      //   id: '',
      //   last_updated: '',
      //   max_supply: '',
      //   name: "",
      //   rank: '',
      //   symbol: '',
      //   total_supply: '',
      //   website_slug: '',
      //   quotes: {
      //     USD: {
      //       market_cap: '',
      //       percentage_change_1h: '',
      //       percentage_change_7d: '',
      //       percentage_change_24h: '',
      //       price: '',
      //       volume_24h: '',
      //     }
      //   }
      // }

  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=5s0&structure=array')
    .then(res => res.json())
    .then(json => this.setState({
      cryptocurrencies: json.data,
      isLoaded: true
    })
   )
   .catch(err => {
     console.log('Error happened during fetching!', err);
   })
 }


  render() {

    const crypto = this.state.cryptocurrencies.map((crypto) => {
      if (this.state.isLoaded === "false") {
        return null
      } else {
     return <CryptoCard name={crypto["name"]} symbol={crypto["symbol"]} price={crypto["quotes"]["USD"]["price"]} rank={crypto["rank"]} market_cap={crypto["quotes"]["USD"]["market_cap"]} change={crypto["quotes"]["USD"]["percent_change_7d"]} />
       }
    })

    return (
      <div className="topheader">
      <Container>
      <Header textAlign="center">
      Top 10 Ranked CryptoCurrencies
      </Header>
      <p className="marketcap">** by market cap</p>
      <Card.Group itemsPerRow={4}>
        {crypto.slice(0, 11)}
      </Card.Group>
      <Header textAlign="center">
      Other CryptoCurrencies
      </Header>
      <Card.Group itemsPerRow={4}>
        {crypto.slice(11)}
      </Card.Group>
      </Container>
      </div>
    );
  }
}

export default CryptoList;


// fetch('https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1MIN', {
//   method: 'GET',
//   headers: {
//     "X-CoinAPI-Key": "A7384D3D-7F8F-4A7C-BA65-D260FD7FE00F"
//   }})
//   .then(res => res.json())
//   .then(json => console.log(json))
//
// fetch('https://rest.coinapi.io/v1/symbols', {
//   method: 'GET',
//   headers: {
//     "X-CoinAPI-Key": "A7384D3D-7F8F-4A7C-BA65-D260FD7FE00F"
//   }})
//   .then(res => res.json())
//   .then(json => console.log(json))
// }
// price={crypto["quotes"]["USD"]["price"]} onehour={crypto["quotes"]["USD"]["percentage_change_1h"]}
