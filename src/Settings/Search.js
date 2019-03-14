import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from "../Shared/Styles";
import {AppContext} from '../App/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  height:25px;
  color: #1163c9;
  place-self: center left;
`;

const handleFilter = _.debounce((inputValue, setFilteredCoins, coinList) => {
  let coinSymbols = Object.keys(coinList);
  let coinNames = coinSymbols.map(coinSymbol => coinList[coinSymbol].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);
  let filteredCoins = _.pickBy(coinList, (value, key) => {
    return _.includes(fuzzyResults, value.CoinName) || _.includes(fuzzyResults, key);
  });
  setFilteredCoins(filteredCoins);
}, 1000);

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, setFilteredCoins, coinList);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) =>
        <SearchGrid>
          <h2> Search all coins </h2>
          <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
        </SearchGrid>
      }
    </AppContext.Consumer>
  );
}