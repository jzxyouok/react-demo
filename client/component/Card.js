import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


import UserImg from '../images/user.jpeg';
import ContentImg from '../images/h10.jpeg';

class CardComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return (
      <Card onTouchTap={e => this.context.router.push('/detail')}>
        <CardHeader
          title="小都比。"
          subtitle="月亮下去了，太阳怎么还不出来？"
          subtitleStyle={{marginTop: '10px'}}
          avatar={UserImg}
        />
        <CardMedia
          overlay={<CardTitle title="ECMAScript 6 入门" subtitle="《ECMAScript 6 入门》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。" />}
        >
          <img src={ContentImg} />
        </CardMedia>
        <CardText style={{textIndent: '20px', lineHeight: 1.6}}>
          本书覆盖 ES6 与上一个版本 ES5 的所有不同之处，对涉及的语法知识给予详细介绍，并给出大量简洁易懂的示例代码。
          本书为中级难度，适合已经掌握 ES5 的读者，用来了解这门语言的最新发展；也可当作参考手册，查寻新增的语法点。
          全书已由电子工业出版社出版，目前是第二版，书名为《ES6 标准入门》。纸版是基于网站内容排版印刷的。
          感谢张春雨编辑支持我将全书开源的做法。如果您认可这本书，建议购买纸版。这样可以使出版社不因出版开源书籍而亏钱，进而鼓励更多的作者开源自己的书籍。
        </CardText>
        <CardActions>
          <FlatButton label="喜欢" />
          <FlatButton label="评论" />
        </CardActions>
      </Card>
    )
  }
};

CardComponent.contextTypes = {
  router: React.PropTypes.func.isRquired
};

export default CardComponent;