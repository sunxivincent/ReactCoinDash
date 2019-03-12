import React from 'react';
import Welcome from './WelcomeMessage';
import ConfirmButton from './ConfirmedButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

export default function () {
  return (
    <Page name="Settings">
      <Welcome/>
      <CoinGrid topSection/>
      <ConfirmButton/>
      <Search/>
      <CoinGrid/>
    </Page>
  )
}