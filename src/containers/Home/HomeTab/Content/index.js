import React, {Component} from 'react';

export default class Content extends Component {
    handleClick = () => {
        this.props.handleClick(this.props.index)
    };

    render() {
        return (
            <span className={this.props.contentClass(this.props.index)}>
                {this.props.item}
            </span>
        )
    }
}
