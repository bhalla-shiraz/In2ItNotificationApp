import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HomeScreen from './pages/HomeScreen'
import App from './pages/App'

export default (
  <Route path="/" component={App}>
     <IndexRoute component={HomeScreen} />
  </Route>

);
