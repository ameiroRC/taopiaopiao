import React, {Component} from 'react';
import './index.less'

export default class DetailList extends Component {
    render() {
        return (
            <section className='Detail-list-row'>
                <h2 className='Detail-list-title'>演职人员</h2>
                <div className='Detail-list'>
                    <div>
                        <a href="https://h5.m.taopiaopiao.com/app/movie/pages/index/artist-detail.html?artistId=2223756&from=outer&sqm=a1z2r.7661912.1.1">
                            <div className='Detail-list-item'>
                                <img src={require('../images/wth.jpg')}
                                     alt=""/>
                                <dl>
                                    <dt>王·天天昊昊</dt>
                                    <dd className="profession director">导演</dd>
                                </dl>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://h5.m.taopiaopiao.com/app/movie/pages/index/artist-detail.html?artistId=2223756&from=outer&sqm=a1z2r.7661912.1.1">
                            <div className='Detail-list-item'>
                                <img src={require("../images/lcy.jpg")}
                                     alt=""/>
                                <dl>
                                    <dt>李·崇摇一摇</dt>
                                    <dd className="profession director">导演</dd>
                                </dl>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://h5.m.taopiaopiao.com/app/movie/pages/index/artist-detail.html?artistId=2223756&from=outer&sqm=a1z2r.7661912.1.1">
                            <div className='Detail-list-item'>
                                <img src={require("../images/sq.jpg")}
                                     alt=""/>
                                <dl>
                                    <dt>孙·不太强</dt>
                                    <dd className="profession director">导演</dd>
                                </dl>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://h5.m.taopiaopiao.com/app/movie/pages/index/artist-detail.html?artistId=2223756&from=outer&sqm=a1z2r.7661912.1.1">
                            <div className='Detail-list-item'>
                                <img src={require("../images/hh.jpg")}
                                     alt=""/>
                                <dl>
                                    <dt>胡·瀚不瀚呢</dt>
                                    <dd className="profession director">导演</dd>
                                </dl>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://h5.m.taopiaopiao.com/app/movie/pages/index/artist-detail.html?artistId=2223756&from=outer&sqm=a1z2r.7661912.1.1">
                            <div className='Detail-list-item'>
                                <img src={require('../images/wyx.jpg')}
                                     alt=""/>
                                <dl>
                                    <dt>王·不亚于熊</dt>
                                    <dd className="profession director">导演</dd>
                                </dl>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://h5.m.taopiaopiao.com/app/movie/pages/index/artist-detail.html?artistId=2223756&from=outer&sqm=a1z2r.7661912.1.1">
                            <div className='Detail-list-item'>
                                <img src={require('../images/djd.jpg')}
                                     alt=""/>
                                <dl>
                                    <dt>刁·屌屌的刁</dt>
                                    <dd className="profession director">导演</dd>
                                </dl>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://h5.m.taopiaopiao.com/app/movie/pages/index/artist-detail.html?artistId=2223756&from=outer&sqm=a1z2r.7661912.1.1">
                            <div className='Detail-list-item'>
                                <img src={require('../images/pqy.jpg')}
                                     alt=""/>
                                <dl>
                                    <dt>潘·欠不欠懿</dt>
                                    <dd className="profession director">导演</dd>
                                </dl>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
