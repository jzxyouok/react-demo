import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange(value){
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="nav-bar">
        <Tabs
          contentContainerStyle={{backgroundColor: 'rgb(255,255,255)'}}
          inkBarStyle={{backgroundColor: 'rgb(211, 47, 47)'}}
          onChange={this.handleChange.bind(this)}
          value={this.state.slideIndex}
        >
          <Tab label="个性推荐" value={0} />
          <Tab label="歌单" value={1} />
          <Tab label="主播电台" value={2} />
          <Tab label="排行榜" value={3} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange.bind(this)}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
          <div style={styles.slide}>
            slide n°4
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Nav;