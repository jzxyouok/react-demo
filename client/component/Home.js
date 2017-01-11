// react
import React from 'react';
// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import {red700, yellow500, blue500} from 'material-ui/styles/colors';
import Slider from 'material-ui/Slider';

// component
import Headers from './common/Header';
import Index from './Index';
// import BottomNavs from './common/BottomNav';

const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: red700,
  }
});

const Home = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
   <div className="app-wrap">
     <Headers />
     <Index />
    </div>
  </MuiThemeProvider>
);

export default Home;