import React, { Component } from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import styled, {css} from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';

class App extends Component {
  render() {
    return (
        <AppLayout>
            <AppProvider>
                <AppBar/>
                <Welcome/>
            </AppProvider>
        </AppLayout>
    );
  }
}

export default App;




