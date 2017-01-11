import React, {Component} from 'react';
import Cards from './Card';
import ImgPreview from './ImgPreview';

import ContentImg from '../images/h10.jpeg';
import ContentBg from '../images/user_bg.jpg';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
 
  render() {
    return (
      <div className="app-container">
        <Cards />
        <Cards />
        <ImgPreview thumb={ContentImg} source={ContentBg}/>
        <Cards />
        <Cards />
        <Cards />
      </div>
    );
  }
}

export default Home;