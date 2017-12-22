import React,{Component} from 'react';
import './index.less'
export default class DetailContent extends Component{

    render(){

        return (
            <div className='Move-text'>
                <div className='movie-score'>
                    <div className='movie-score-number'>
                        <b className='movie-score-item'>{this.props.moveItem.grade}</b>
                        <b className='movie-score-item'>7.5</b>
                        <b className='movie-score-item'>{this.props.moveItem.todayPrice}</b>
                    </div>
                    <div className='movie-score-type'>
                        <span className='movie-score-type-item'>观众评分</span>
                        <span className='movie-score-type-item'>专业评分6.4</span>
                        <span className='movie-score-type-item'>想看人数</span>
                    </div>
                    {/*<div className='movie-score-btn'>*/}
                    {/*<div className='btn'>想看</div>*/}
                    {/*<div className='btn'>看过</div>*/}
                    {/*</div>*/}
                </div>
                  <section className='Movie-plot-row'>
              <span className='Movie-plot'>
                  {this.props.moveItem.story} ...</span>
                      {/*<span className='likey'>展开</span>*/}
                  </section>
            </div>
        )
    }
}
