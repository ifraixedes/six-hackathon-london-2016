
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import configure from './store'
import GBApp from './containers/GBApp'
import GoogleData from './components/GoogleData'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={GBApp}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('GeoBench')
)


ReactDOM.render(
  <GoogleData/>,
  document.getElementById('GoogleData')
)
