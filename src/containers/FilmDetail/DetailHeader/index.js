import React,{Component} from 'react';
import './index.less'
export default class DetailHeader extends Component{
    render(){
        let bg = this.props.moveItem.img;
        let style={backgroundImage:`url(${bg})`,backgroundSize: 'cover'};
        console.log(this.props);
        return (
            <header className='DetailHeader' style={style}>
                <figure>
                    <img src={this.props.moveItem.img} alt=""/>
                </figure>
                <article className="mdhr abs">
                    <h4>{this.props.moveItem.title}</h4>
                    <p >{this.props.moveItem.title}</p>
                    <p >{this.props.moveItem.starring}</p>
                    <p >中国大陆 ｜{this.props.moveItem.time}</p>
                    <p >{this.props.moveItem.releaseTime}</p>
                </article>
            </header>

        )
    }
}
