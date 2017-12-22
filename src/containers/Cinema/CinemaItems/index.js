import React,{Component} from 'react';
import './index.less';
export default class CinemaItems extends Component{
    render(){
        return (
            <div className="cinema">
                <h1>影院</h1>
                {
                    this.props.cinemas.map((item,index)=>(
                        <div className="ci-list" key={index}>
                            <h3>{item.cinema}</h3>
                            <p>{item.location}</p>
                            <i>{item.price}</i>
                        </div>
                    ))
                }
            </div>
        )
    }
}