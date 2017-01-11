import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Search from 'material-ui/svg-icons/action/search';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/border-color';

import Avatar from 'material-ui/Avatar';
import UserImg from '../../images/user.jpeg';
import {red700} from 'material-ui/styles/colors';

// icon color
const iconColor = 'rgb(0, 188, 212)';

class AppBarExampleComposition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      userName: 'Zen && React',
      desc: '新年到了，大家都在说新年好，身体好，财运好，学习好，工作好。而我只想跟你说：开心就好'
    };
  }
  handleToggle(){
    this.setState({open: !this.state.open});
  }
  handleClose(){
    setTimeout(e => this.setState({open: false}), 250)
  }
  render() {
    return (
      <div className="app-header">
        <AppBar
          title={<div>111</div>}
          titleStyle={{textAlign: 'center'}}
          iconElementLeft={<NavigationMenu className="NavigationMenu" onTouchTap={this.handleToggle.bind(this)} />}
          iconElementRight={<Search className="NavigationMenu" viewBox={'0 0 20 20'} />}
        />
        <Drawer 
          open={this.state.open}
          docked={false}
          width={300}
          disableSwipeToOpen={true}
          onRequestChange={(open) => this.setState({open})}>
          <div className="subnav-head" ref="_animation">
              <EditIcon className="EditIcon" />
              <ListItem
                disabled={true}
                size={50}
                leftAvatar={
                  <Avatar src={UserImg} style={{border: '1px solid #fff'}} />
                }
                style={{color: '#fff', fontSize: '30px'}}
              >{this.state.userName}</ListItem>
              <p className="desc">{this.state.desc}</p>
          </div>
          <List>
            <ListItem primaryText="我的消息" leftIcon={<RemoveRedEye color={red700}/>} onTouchTap={this.handleClose.bind(this)} />
            <ListItem primaryText="我的分享" leftIcon={<PersonAdd color={red700}/>} onTouchTap={this.handleClose.bind(this)} />
            <ListItem primaryText="主题换肤" leftIcon={<ContentLink color={red700}/>} onTouchTap={this.handleClose.bind(this)} />
            <Divider />
            <ListItem primaryText="我的文件" leftIcon={<ContentCopy color={red700}/>} onTouchTap={this.handleClose.bind(this)} />
            <ListItem primaryText="我的相册" leftIcon={<Download color={red700}/>} onTouchTap={this.handleClose.bind(this)} />
            <Divider />
            <ListItem primaryText="我的收藏" leftIcon={<Delete color={red700}/>} onTouchTap={this.handleClose.bind(this)} />
          </List>
        </Drawer>
      </div>
    );
  }
}

export default AppBarExampleComposition;