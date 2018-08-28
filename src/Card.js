import React, {Component} from 'react';
import './Card.css';


class Card extends Component{
    constructor(){
        super();
        this.state={
            color: '#777',
        }
    }
    handleHover = (e) =>{
        if(e.type === "mouseover"){
            this.setState({color: 'var(--main-blue)'});
        }
        else{
            this.setState({color: '#777'});
        }
    }
    render(){
        let m = "";
        if(this.props.pos === 'r'){
            m = "0px 0px var(--side-margin) 0px";
        }
        else{
            m = '0px var(--side-margin) 0px 0px';
        }
        return(
            <a className = "card" target = "_blank"  style={{textDecoration:'none', margin:`${m}`}} href={this.props.cardData.link} onMouseOver={this.handleHover} onMouseOut={this.handleHover}>
                <div className="headerImg" style={{background:`url(${this.props.cardData.img})`, backgroundPosition:"center", backgroundSize:"auto 100%"}}></div>
                <div className="content" style={{color:`${this.state.color}`}}>
                    <h2>{this.props.cardData.content}</h2>
                </div>
            </a>
        );
    }
}
export default Card;
