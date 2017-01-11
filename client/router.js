import React , {Component} from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';

import App from './component/App';
import Home from './component/Home';
import Location from './component/Location';
import Player from './component/Player';
import Detail from './component/Detail';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/lo" component={Location} />
      <Route path="/play" component={Player} />
      <Route path="/detail" component={Detail} />
      <IndexRoute component={App} />
    </Route>
  </Router>
)

export default AppRouter;