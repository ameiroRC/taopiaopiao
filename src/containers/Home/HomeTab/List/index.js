import React, {Component} from 'react';

export default class List extends Component {
    handleClick = () => {
        this.props.handleClick(this.props.index)
    };

    render() {
        return (
            <li className={this.props.currentClass(this.props.index)} onClick={this.handleClick}>
                {this.props.item}
            </li>
        )
    }
}
