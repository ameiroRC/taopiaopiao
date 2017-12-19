import React, {Component} from 'react';
import './index.less';
import RankItems from "./RankItems/index";

export default class Rank extends Component {
    render() {
        return (
            <div className="RankWrap">
                <div className="RankItems">
                    <RankItems/>
                    <RankItems/>
                    <RankItems/>
                </div>
            </div>
        )
    }
}
