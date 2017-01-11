import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

import img1 from '../images/banner1.jpg';
import img2 from '../images/banner2.jpg';

const styles = {
  swiperBox: {
    backgroundColor: 'rgb(0, 188, 212)'
  },
  swiperWrap: {
    width: '100vw'
  },
  swiperImg: {
    maxWidth: '100%'
  }
};

const swipeOptions = {
  atuo: 3000,
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
 
  render() {
    return (
      <div className="app-container">
        <ReactSwipe swipeOptions={swipeOptions}>
          <div style={styles.swiperWrap}><img src={img1} style={styles.swiperImg} /></div>
          <div style={styles.swiperWrap}><img src={img2} style={styles.swiperImg} /></div>
          <div style={styles.swiperWrap}><img src={img1} style={styles.swiperImg} /></div>
        </ReactSwipe>
      </div>
    );
  }
}

export default Home;