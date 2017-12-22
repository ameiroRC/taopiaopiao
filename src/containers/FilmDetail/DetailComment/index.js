import React,{Component} from 'react';
import './index.less'
export default class DetailComment extends Component{
    render(){
        return (
            <section className='Comment-row'>
             <h2>票房</h2>
                <div className='Comment-content'>
                    <div className='Comment-content-item'>
                        <h3>3</h3>
                        <p>今日票房排名</p>
                    </div>
                    <div className='Comment-content-item'>
                        <h3>11836</h3>
                        <p>首周票房（万）</p>
                    </div><div className='Comment-content-item'>
                    <h3>103685</h3>
                    <p>累计票房</p>
                </div>
                </div>
                <a href="https://h5.m.taopiaopiao.com/app/moviepro/pro/show/detail/index.html?showId=214258&__webview_options__=readTitle%3DYES%26showOptionMenu%3DYES">票房详情</a>
            </section>
        )
    }
}
