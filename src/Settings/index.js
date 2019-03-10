import React from 'react';
import Welcome from './WelcomeMessage';
import ConfirmButton from './ConfirmedButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';

export default function () {
  return (
    <Page name="Settings">
      <Welcome/>
      <CoinGrid topSection/>
      <ConfirmButton/>
      <CoinGrid/>
    </Page>
  )
}