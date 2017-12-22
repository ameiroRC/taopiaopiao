import React,{Component} from 'react';
import './inde.less'
export default class DetailAdvertisement extends Component{
    render(){
        return (
            <div className='ads-row'>
              <h2>主创来了</h2>
                <div className='ads-box'>
                    <img
                    className='abs-banner'
                        src="http://img4.imgtn.bdimg.com/it/u=2361408732,2135188814&fm=11&gp=0.jpg" alt=""/>
                    <b>黄轩专访</b>
                     <span className='line'>————</span>
                    <p>全国最好的男人</p>
                    <span className='btn'>速去围观</span>
                </div>
            </div>
        )
    }
}
