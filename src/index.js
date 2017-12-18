import React from 'react';
import ReactDOM from 'react-dom';
import APP from './APP';
import store from './store';
import {Provider} from 'react-redux';//这个属性作为根标签能够将仓库传给其下的组件

ReactDOM.render(
  <APP/>
  , document.querySelector('#root')
);