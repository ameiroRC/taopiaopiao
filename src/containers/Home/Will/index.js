import React, {Component} from 'react';
import WillSlider from "./WillSlider/index";
import WillFilm from "./WillFilm/index";
import './index.less';
import WillHead from "./WillHead/index";

export default class Will extends Component {
    render() {
        return (
            <div className="Will">
                <div className="WillContent">
                    <WillHead/>
                    <WillSlider/>
                    <WillFilm/>
                    <WillFilm/>
                    <WillFilm/>
                    <WillFilm/>
                    <WillFilm/>
                </div>
            </div>
        )
    }
}
