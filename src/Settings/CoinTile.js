import React from 'react';
import {AppContext} from "../App/AppProvider";
import {SelectableTile, DeletableTile, DisabledTile} from "../Shared/Tile";
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';


function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection ? () => {
    removeCoin(coinKey)
  } : () => {
    addCoin(coinKey)
  }
}

export default function({coinKey, topSection}) {
  return <AppContext.Consumer>
    {({coinList, addCoin, removeCoin, isFavorite}) => {
      let coin = coinList[coinKey];
      let TileClass = SelectableTile;
      if (topSection) {
        TileClass = DeletableTile;
      } else if (isFavorite(coinKey)) {
        TileClass = DisabledTile;
      }
      return <TileClass
        onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
      >
        <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} topSection={topSection}/>
        <CoinImage coin={coin}/>
      </TileClass>
    }}
  </AppContext.Consumer>
}