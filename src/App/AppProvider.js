import React from 'react';
import _ from 'lodash';

const cc = require('cryptocompare');

export const AppContext = React.createContext();
const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        page: 'Dashboard',
        ...this.savedSettings(),
        setPage: this.setPage,
        confirmedFavorites: this.confirmedFavorites,
        favorites: ['BTC', 'ETH', 'BNB'],
        addCoin: this.addCoin,
        removeCoin: this.removeCoin,
        isFavorite: this.isFavorite,
      }
  }

  componentDidMount() {
    this.fetchCoins();
  }

  addCoin = key => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({favorites});
    }
  };

  removeCoin = key => {
    let favorites = [...this.state.favorites];
    this.setState({favorites: _.pull(favorites, key)});
  };

  confirmedFavorites = () => {
    this.setState({
      firstVisit:false,
      page: 'Dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      favorites: this.state.favorites
    }));
  };

  setPage = page => this.setState({page});
g
  render() {
      return (
          <AppContext.Provider value={this.state}>
            {/*any component between open and close bracket will be props.children*/}
              {this.props.children}
          </AppContext.Provider>
      )
  }

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('crytoDash'));
    if (!cryptoDashData) {
      return {page: 'Settings', firstVisit: true}
    }
    let favorites = {cryptoDashData};
    return favorites;
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  };

  isFavorite = key => _.includes(this.state.favorites, key);
}
