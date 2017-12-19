import React, {Component} from 'react';
//将路由引入，这个写法会将history引入Router，不用再次手动引入
import {HashRouter as Router, Route} from 'react-router-dom';
import './style/index.less';
import Home from './containers/Home/index';//主页
import Cinema from './containers/Cinema/index';//电影院页面（第二页）
import Mine from './containers/Mine/index';//我的页面（第三页）
import CinemaDetail from './containers/CinemaDetail/index';//电影详情页
import FilmDetail from './containers/FilmDetail/index';//电影院详情页
import Sell from "./containers/Sell/index";//选座页面
import Tab from "./components/Tab/index";//路由（NavLink标签中的内容就是页面下切换的路由选项）
import Search from './containers/Search';//搜索页面
import City from './containers/City';//城市变更页面
import Hot from './containers/Home/Hot';//热映页面
import Will from './containers/Home/Will';//即将上映页面
import Rank from './containers/Home/Rank';//排行榜页面


export default class APP extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/cinema'} component={Cinema}/>
          <Route path={'/mine'} component={Mine}/>
          {/*<Route path={'/cinemaDetail'} component={CinemaDetail}/>
          <Route path={'/filmDetail'} component={FilmDetail}/>
          <Route path={'/sell'} component={Sell}/>
          <Route path={'/search'} component={Search}/>
          <Route path={'/city'} component={City}/>*/}
          <Route path={'/home/hot'} component={Hot}/>
          <Route path={'/home/will'} component={Will}/>
          <Route path={'/home/Rank'} component={Rank}/>
          <Tab/>
        </div>
      </Router>
    )
  }
}
