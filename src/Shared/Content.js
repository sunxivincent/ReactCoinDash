import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function({children}) {
  return <AppContext.Consumer>
    {({coinList, prices, firstVisit}) => {
      if (!coinList) {
        return <div> Loading coins </div>
      }
      if (!firstVisit && !prices) {
        return <div> Loading prices </div>
      }
      return <div> {children} </div>
    }}
  </AppContext.Consumer>
}