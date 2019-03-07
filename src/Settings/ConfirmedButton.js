import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import {fontSize1, greenBoxShadow, color3} from "../Shared/Styles";

const ConfirmButtonStyled = styled.div `
  margin: 20px;
  color: ${color3};
  cursor: pointer;
  {$fontSize1};
  padding: 5px;
  &:hover {
   ${greenBoxShadow}
  }
`;

export const CenterDiv = styled.div `
  display: grid;
  justify-content: center;
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({confirmedFavorites}) =>
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmedFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      }
    </AppContext.Consumer>
  )
}