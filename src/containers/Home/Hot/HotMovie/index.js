import React, {Component} from 'react';
import './index.less'


export default class HotMovie extends Component {
  render() {
    return (
      <ul className={'hotMovie'}>
        {
          this.props.hotMovies.map((item, index) => (
            item.isShow === true ?
              <li key={index}>
                <img src={item.img}/>
                <h3>{item.title}</h3>
                {
                  item.is3D === true ? <span className={'mark'}>3D</span> : null
                }<br/>
                <p className={'hot-grade'}>观众评分：<strong>{item.grade}</strong></p>
                <p className={'hot-director'}>{item.director}</p>
                <p className={'hot-starring'}>{item.starring}</p>
                <span className={'hot-buy'}>购票</span>
              </li> : null
          ))
        }
      </ul>
    )
  }
}
