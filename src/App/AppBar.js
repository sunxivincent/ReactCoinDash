import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "./AppProvider";

const Bar = styled.div `
    display: grid;
    grid-template-columns: 180px auto 180px 180px;
    margin-botton: 60px;
`

const Logo = styled.div `
    font-size: 1.5em;
`

const ControlButtonElement = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 30px #03ff03
    `};
`

function ControlButton({name}) {
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
        <ControlButtonElement
          active={name === page}
          onClick={() => setPage(name)}
        >
          {name}
        </ControlButtonElement>
      )}
    </AppContext.Consumer>
  )
}

export default function () {
  return (
    <Bar>
      <Logo>Crypto Dash</Logo>
      <div/>
      <ControlButton name="Dashboard"/>
      <ControlButton name="Setting"/>
    </Bar>
  );
}