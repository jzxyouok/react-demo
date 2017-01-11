import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconVideo from 'material-ui/svg-icons/av/videocam';
import IconStar from 'material-ui/svg-icons/toggle/star';

const nearbyIcon = <IconLocationOn />;
const videoIcon = <IconVideo />;
const starIcon = <IconStar />;

class BottomNavigationComponent extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      selectedIndex: 0,
    };
  }



  componentWillMount(){
    let _this = this;
    ['/','/lo','/co'].map((item, index) => {
      if(_this.context.router.isActive(item))
      _this.setState({
        selectedIndex: index
      });
    })
  }
 
  select(index){
    let key = {
      0: '',
      1: 'lo',
      2: 'co'
    }[index]; 
    this.setState({selectedIndex: index});
    this.context.router.push(`/${key}`);
  }

  render() {
    return (
      <div className="app-footer">
        <Paper zDepth={4}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="发现"
              icon={videoIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="附近"
              icon={nearbyIcon}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label="收藏"
              icon={starIcon}
              onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}

BottomNavigationComponent.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default BottomNavigationComponent;