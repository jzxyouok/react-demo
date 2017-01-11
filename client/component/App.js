// react
import React from 'react';

import Home from './Home';

// tap event
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// css
import '../scss/index.scss';

const App = (props) => (
  props.children ? props.children : <Home />
);

export default App;



