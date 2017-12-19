import React, {Component} from 'react';
import './index.less'
import List from './List'
import Content from "./Content/index";
import Hot from "../Hot/index";
import Will from "../Will/index";
import Rank from "../Rank/index";

export default class HomeTab extends Component {
  constructor() {
    super();
    this.state = {
      title: ["正在热映", "即将上映", "排行榜"],
      content: [<Hot/>, <Will/>, <Rank/>],
      current: 1
    }
  }

  handleClick = (index) => {
    this.setState({current: index})
  };

  currentClass = (index) => {
    return this.state.current === index ? 'current active' : '';
  };

  contentClass = (index) => {
    return this.state.current === index ? "content" : '';
  };

  render() {
    return (
      <div>
        <ul id={'tab'}>
          {
            this.state.title.map((item, index) => (
              <List
                currentClass={this.currentClass}
                handleClick={this.handleClick}
                key={index}
                index={index}
                item={item}
              />
            ))
          }
        </ul>
        <div id={'content'}>
          {
            this.state.content.map((item, index) => (
              <Content
                contentClass={this.contentClass}
                key={index}
                index={index}
                item={item}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
