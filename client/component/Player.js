import React, {Component} from 'react';
import PlayerMenu from './PlayerMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import {red700} from 'material-ui/styles/colors';
import Slider from 'material-ui/Slider';
import {Link} from 'react-router';
import ReactPlayer from 'react-player';
import songlist from '../js/mp3list';
import timeTool from '../js/timeTool';

const {formatSeconds} = timeTool;
const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: red700,
  }
});
let timer = null;
let _time = 0;

const Progress = (props) => (
  <div className="progress">
    <div className="bg"></div>
    <div className="loaded" style={{width: `${props.loaded}%`}}></div>
    <div className="played" style={{width: `${props.value}%`}}><i className="bar"></i></div>
  </div>
);

const PlayBg = (props) => (
  <div className="play-bg">
    <div className="play-img" style={{
      background: `url(${props.song_img}) center center / cover no-repeat rgb(0,0,0)`,
    }}></div>
  </div>
);

class Play extends Component{
  constructor(props){
    super(props);
    this.state = {
      url: '',
      loop: false, //循环
      playing: false, // 播放状态
      volume: 0.5, // 声音
      hidden: true, // 显示播放器,
      progressFrequency: 1000,
      width: 0,
      height: 0,
      loaded: 0, // 已加载
      completed: 0, // 进度条
      startTime: '00:00', // 歌曲开始时间
      duration: '00:00', // 歌曲长度
      zan: false,
    };
    this.index = 0;
  }

  componentDidMount(){
    this._playSong(this.index);
  }

  currentTime(value){
    clearInterval(timer);
    let h,m,s = 0;
    const curr = this.refs.current;

    const parse = (num) => {
      let _num = num;
      if(num < 10){
        _num = `0${num}`;
      }
      return _num;
    }

    timer = setInterval(() => {
      _time++;
      h = parse(parseInt(_time/60/60));
      m = parse(parseInt(_time/60));
      s = parse(Number(_time%60));
      
      if(_time === parseInt(value)){
        clearInterval(timer);
      }
      curr.innerHTML = `${m}:${s}`;
    }, 1000);  
  }

  stopTime(){
    _time = 0;
    clearInterval(timer);
    this.refs.current.innerHTML = '00:00';
  }

  togglePlay(){
    this.setState({playing: !this.state.playing});
    if(this.state.playing){
      clearInterval(timer);
    }else{
      this.currentTime(_time);
    }
  }

  _playSong(index){
    let {song_url} = songlist[index];
    this.setState({url: song_url});
  }

  prevSong(){
    this.stopTime();
    this.setState({playing: false});
    this.index <= 0 ? this.index = songlist.length - 1 : this.index--;
    this._playSong(this.index);
  }

  nextSong(){
    this.stopTime();
    this.setState({playing: false});
    this.index >= songlist.length - 1 ? this.index = 0 : this.index++;
    this._playSong(this.index);
  }

  onProgress(state){
    this.setState({
      loaded: state.loaded * 100,
      completed: state.played * 100
    });
  }

  onDuration(duration){
    this.setState({
      duration: formatSeconds(duration),
    });
  }

  onReady(){
    this.stopTime();
    this.setState({playing: true});
  }

  onPlay(){
    this.currentTime(_time);
  }

  onError(){
    this.stopTime();
    this.setState({playing: false}, e => console.log('歌曲加载失败', e));
  }

  onEnded(){
    this.stopTime();
    this.setState({
      playing: false,
      loaded: 0, 
      completed: 0
    });
    this.prevSong();
  }

  slideEvent(event, value){
    this.setState({
      volume: value
    })
  }

  render(){
    const {url, loop, playing, hidden, progressFrequency, width, height, completed, 
      loaded, startTime, duration, volume, zan} = this.state;
    return (
      <div className="media-player">
        <div className="bg_player_mask"></div>
        <div className="media-bg" style={{
        background: `url(${songlist[this.index].song_img}) center center / cover no-repeat`,
        }}></div>
        
        <div className="media-main">
          <div className="play-header">
            <Link to="/" className="arrow"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
            <div className="play-title">
              <p>{songlist[this.index].song_name}</p>
              <p className="sub-title">{songlist[this.index].singer}</p>
            </div>
            <a href="javascript:void(0)"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
          </div>

          <div className="play-main">
            <PlayBg song_img={songlist[this.index].song_img} />
            <ReactPlayer url={url} playing={playing} hidden={hidden} volume={volume}
              width={width} height={height} loop={loop} progressFrequency={progressFrequency}
              onProgress={this.onProgress.bind(this)}
              onDuration={this.onDuration.bind(this)}
              onReady={this.onReady.bind(this)}
              onPlay={this.onPlay.bind(this)}
              onEnded={this.onEnded.bind(this)}
             />
          </div>

          <div className="play-footer">
            <div className="user-control">
              <div onTouchTap={() => this.setState({zan: !this.state.zan})}>
                { !zan ? <i className="fa fa-heart-o" aria-hidden="true"
                style={{fontSize: '1.5rem', color:'#d32f2f'}}></i>
                  : <i className="fa fa-heart" aria-hidden="true"
                  style={{fontSize: '1.5rem', color:'#d32f2f'}}></i>
                }
              </div>
              <div><i className="fa fa-download" aria-hidden="true"></i></div>
              <div><i className="fa fa-comments" aria-hidden="true"></i></div>
              <div style={{position: 'relative', width: '100px'}}>
                <i className="fa fa-volume-up" aria-hidden="true"></i>
                <Slider min={0} max={1} step={0.1} defaultValue={volume}
                  style={{width: '80px', position: 'absolute', left: '20px', top: 0}}
                  sliderStyle={{margin: 0, height: 'auto'}}
                  onChange={this.slideEvent.bind(this)}
                />
              </div>
            </div>
            <div className="control">
              <div className="time">
                <div className="current-time" ref="current">{startTime}</div>
                <Progress value={completed} loaded={loaded} />
                <div className="total-time">{duration}</div>
              </div>
              <div className="btn-group">
                <div className="btn-single" onTouchTap={() => this.setState({loop: !this.state.loop})}>
                  <i className="fa fa-random" aria-hidden="true" 
                  style={{fontSize: '1.2rem'}}></i>
                </div>
                <div className="btn-prev btns" onTouchTap={this.prevSong.bind(this)}>
                  <i className="fa fa-step-backward" aria-hidden="true"
                  style={{fontSize: '1.3rem'}}></i>
                </div>
                <div className="btn-play" onTouchTap={this.togglePlay.bind(this)}>
                  {
                    playing ? <i className="fa fa-pause" aria-hidden="true"
                    style={{fontSize: '2rem'}}></i>
                    : <i className="fa fa-play" aria-hidden="true"
                    style={{fontSize: '2rem'}}></i>
                  }
                </div>
                <div className="btn-next btns" onTouchTap={this.nextSong.bind(this)}>
                  <i className="fa fa-step-forward" aria-hidden="true"
                  style={{fontSize: '1.3rem'}}></i>
                </div>
                <div className="btn-menu">
                  <i className="fa fa-list-ul" aria-hidden="true"
                  style={{fontSize: '1.2rem'}}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Player extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="play-wrap">
        <Play />
        <PlayerMenu />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Player;