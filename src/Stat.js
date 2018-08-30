import React, {Component} from 'react';
import './Stat.css';

class Stat extends Component{
    render(){
        return(
            <div className="stat">
                <div className="info">
                    <img src={this.props.icon} />
                    <p style={{fontWeight:400}}><span style={{fontSize:'30px'}}>{this.props.number}</span>{this.props.unit} </p>
                </div>
                <div className="description">
                    <p> {this.props.description} </p>
                </div>
            </div>
        )
    }
}


export default Stat;
