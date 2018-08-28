import React, {Component} from 'react';
import './Tab.css';

class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes: 'line',
            show: 'none',
            color: 'var(--main-text)',
            lineColor: 'var(--bg-color)',
        }
    }
    hover = (e) =>{
        if(e.type === 'mouseover'){
            this.setState({
                classes: 'line animated zoomIn',
                color: 'var(--main-blue)',
                lineColor: 'var(--main-blue)',
                show: 'block',
            })
        }
        else{
            this.setState({
                classes: 'line',
                color: 'var(--main-text)',
                lineColor: 'var(--bg-color)',
                show: 'none',
            })

        }
        console.log(e.type);
    }
    render(){
        return(
            <div className = "Tab" onMouseOver={this.hover} onMouseOut={this.hover}>
                <div style={{marginBottom:'2px', color: `${this.state.color}`}}>{this.props.name}</div>
                <div className = {this.state.classes} style = {{borderTop: `1px solid ${this.state.lineColor}`}}></div>
            </div>
        )
    }
}

export default Tab;
