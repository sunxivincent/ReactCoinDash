import React from 'react';
import Welcome from './WelcomeMessage';
import ConfirmButton from './ConfirmedButton';
import Page from '../Shared/Page';

export default function () {
  return (
    <Page name="Settings">
      <Welcome/>
      <ConfirmButton/>
    </Page>
  )
}