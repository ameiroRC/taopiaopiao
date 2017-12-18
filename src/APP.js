import React, {Component} from 'react';
//将路由引入，这个写法会将history引入Router，不用再次手动引入
import {HashRouter as Router, Route} from 'react-router-dom';
import './style/index.less';
import Home from './containers/Home/index';
import Cinema from './containers/Cinema/index';
import Mine from './containers/Mine/index';
import CinemaDetail from './containers/CinemaDetail/index';
import FilmDetail from './containers/FilmDetail/index';
import Sell from "./containers/Sell/index";
import Tab from "./components/Tab/index";
import Search from './containers/Search';
import City from './containers/City';
import Hot from './containers/Home/Hot';
import Will from './containers/Home/Will';
import Rander from './containers/Home/Rander';


export default class APP extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/cinema'} component={Cinema}/>
          <Route path={'/mine'} component={Mine}/>
          <Route path={'/cinemaDetail'} component={CinemaDetail}/>
          <Route path={'/filmDetail'} component={FilmDetail}/>
          <Route path={'/sell'} component={Sell}/>
          <Route path={'/search'} component={Search}/>
          <Route path={'/city'} component={City}/>
          <Route path={'/home/hot'} component={Hot}/>
          <Route path={'/home/will'} component={Will}/>
          <Route path={'/home/rander'} component={Rander}/>
          <Tab/>
        </div>
      </Router>
    )
  }
}
