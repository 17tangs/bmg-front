import React, {Component} from 'react';
import './Feature.css';


class Feature extends Component{
    render(){
        return(
            <div className='feature' data-aos='fade-up'>
                <div className='logo'>
                    <img src={this.props.img} style={{height:'100%', width:'100%'}} />
                </div>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Feature;
