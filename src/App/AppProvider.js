import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        page: 'Dashboard',
        ...this.savedSettings(),
        setPage: this.setPage,
        confirmedFavorites: this.confirmedFavorites
      }
  }

  confirmedFavorites = () => {
    this.setState({
      firstVisit:false,
      page: 'Dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      test: 'hello'
    }));
  }

  setPage = page => this.setState({page});

  render() {
      return (
          <AppContext.Provider value={this.state}>
              {this.props.children}
          </AppContext.Provider>
      )
  }

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('crytoDash'));
    if (!cryptoDashData) {
      return {page: 'Settings', firstVisit: true}
    }
    return {}
  }
}
