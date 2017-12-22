import React, {Component} from 'react';
import './index.less'
import {getComment} from '../../../api/gitcomments'

export default class Comment extends Component {
    constructor() {
        super();
        this.state = {id: 0,comment:[]}
    }

    componentDidMount() {
        let id = this.props.moveItem.id;
        this.setState({id:id});
         getComment(this.state.id).then(comment=>this.setState({comment:comment}));
    }

    render() {
        return (
            <section className="show-comments">
                <h2>观众热评</h2>
                {
                    this.state.comment.map((item, index) => (
                        <div className='show-comment' key={index}>
                            <img src="//gw.alicdn.com/i2/TB11IoeMVXXXXasXFXXXXXXXXXX_.jpg_80x80Q30s150.jpg" alt=""/>
                            <dl>
                                <dt>{item.username}</dt>
                                <dd>{item.content}</dd>
                            </dl>
                        </div>
                    ))

                }

            </section>

        )
    }
}
