import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Tab.css';

class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes: 'line',
            show: 'none',
            color: this.props.color,
            lineColor: 'rgba(0,0,0,0)',
        }
    }
    hover = (e) =>{
        if(e.type === 'mouseover'){
            this.setState({
                classes: 'line animated zoomIn',
                color: 'var(--main-blue)',
                lineColor: this.props.color,
                show: 'block',
            })
        }
        else{
            this.setState({
                classes: 'line',
                color: this.props.color,
                lineColor: 'rgba(0,0,0,0)',
                show: 'none',
            })

        }
    }
    render(){
        let page = ''
        switch (this.props.name){
            case('MVC'):
                page = '/MVC'
                break;
            case('Lotus AI'):
                page = '/Lotus'
                break;
            case('Contact Us'):
                page = 'contact'
                break;
            default:
                page = '/'
                break;
        }
        return(
            <Link to={page} style={{textDecoration:'none'}} ><div className = "Tab" onClick={this.props.handleClick} onMouseOver={this.hover} onMouseOut={this.hover}>
                <div id={this.props.name} style={{marginBottom:'2px', color: `${this.props.color}`}}>{this.props.name}</div>
                <div className = {this.state.classes} style = {{borderTop: `2px solid ${this.state.lineColor}`}}></div>
            </div></Link>
        )
    }
}

export default Tab;
