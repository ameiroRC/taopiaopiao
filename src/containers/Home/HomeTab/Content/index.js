import React, {Component} from 'react';

export default class Content extends Component {
    handleClick = () => {
        this.props.handleClick(this.props.index)
    };

    render() {
        return (
            <div className={this.props.contentClass(this.props.index)}>
                {this.props.index===this.props.current?this.props.item:null}
            </div>
        )
    }
}
