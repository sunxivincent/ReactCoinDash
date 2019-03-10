import React from 'react';
import styled from "styled-components";
import {DeletableTile} from "../Shared/Tile";

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinName = styled.div`
  justify-self: left;  
`;

export const CoinSymbol = styled.div`
  justify-self: right;  
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default function({name, symbol, topSection}) {
  return <CoinHeaderGridStyled>
    <CoinName> {name} </CoinName>
    {topSection ? <DeleteIcon> X </DeleteIcon> : <CoinSymbol> {symbol} </CoinSymbol>}
    </CoinHeaderGridStyled>
}