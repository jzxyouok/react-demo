import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

import IconButton from 'material-ui/IconButton';
import LoopIcon from 'material-ui/svg-icons/av/loop';

const styles = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgs: {
    maxWidth: '100%',
  },
  innerWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapBg: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,1)',
    position: 'absolute'
  },
  number: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
    zIndex: 1,
    position: 'absolute',
    bottom: '15px',
  }
};

class ImgPrview extends Component{
  constructor(props){
    super(props);
    this.state = {
      showBg: false,
      imgLoad: false,
    };
  }

  loadUrl(name){
    let img = this.refs[name];
    let _img = new Image();
    _img.src = img.loadUri;
    console.log(img.getAttribute('loadUri'))
  }

  showDetial(){
    let img = new Image(), _this = this;
    img.src = this.props.source;
    img.onload = function(){
      _this.setState({imgLoad: true});
    };
    this.setState({showBg: true});
  }

  hideDetail(){
    let {sourceBg, sourceImg} = this.refs;
    sourceBg.style.display = 'none';
    sourceImg.className = 'animation-gradually';
    sourceImg.addEventListener('webkitAnimationEnd', ()=> {
      sourceBg.style.display = 'block';
      this.setState({showBg: false});
    },false);
  }

  _renderBg(){
    return (
      <div style={styles.innerWrap} onTouchTap={this.hideDetail.bind(this)}>
        <div style={styles.wrapBg} ref="sourceBg"></div>
        {
          this.state.imgLoad ? <img src={this.props.source} ref="sourceImg" style={{maxWidth: '100%', maxHeight: '100%', zIndex: 1}} />
          : <IconButton><LoopIcon className="animation-rotate" color={'#fff'} /></IconButton>
        }
        {this.state.imgLoad && <div style={styles.number}>1 / 5</div>}
      </div>
    );
  }

  render(){
    return (
      <div style={styles.wrap}>
        <img src={this.props.thumb} ref="imgComponent" style={styles.imgs} 
             onLoad={this.loadUrl.bind(this, 'imgComponent')} 
             onTouchTap={this.showDetial.bind(this)} 
        />
        { this.state.showBg && this._renderBg() }
      </div>
    );
  }
}

export default ImgPrview;