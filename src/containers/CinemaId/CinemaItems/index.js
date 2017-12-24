import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'
export default class CinemaItems extends Component{

    render(){
        return (
            <div className="cinema">
                <h1>影院</h1>
                {
                    this.props.cinemas.map((item,index)=>(
                        <Link  to={{pathname:`/cinemas/${item.id}`,state:item}} className="ci-list" key={index}>
                            <h3>{item.cinema}</h3>
                            <p>{item.location}</p>
                            <i>{item.price}</i>
                        </Link>
                    ))
                }
            </div>
        )
    }
}