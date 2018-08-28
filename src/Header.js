import React, { Component } from 'react';
import './Header.css';


class Header extends Component{
    constructor(){
        super();
        this.b1 = "rgba(0, 102, 204, 1)";
        this.b2 = "rgba(0,0,0,0.5)"//"rgba(0, 153, 255, 1)";
        this.state={
            hover: false,
            bgColorCh: `${this.b2}`,
            colorCh: "white",
            bgColorEn: "white",
            colorEn: `${this.b2}`,
        }
    }
    handleSelect = (e) =>{
        if(e.type === "mouseenter"){
            this.setState({hover:true})
            if(this.state.bgColorCh !== "white"){
                this.setState({bgColorCh: `${this.b1}`})
            }
            if(this.state.bgColorEn !== "white"){
                this.setState({bgColorEn: `${this.b1}`})
            }
            if(this.state.colorEn !== "white"){
                this.setState({colorEn: `${this.b1}`})
            }
            if(this.state.colorCh !== "white"){
                this.setState({colorCh: `${this.b1}`})
            }
        }
        if(e.type === "mouseleave"){
            this.setState({hover:false})
            if(this.state.bgColorCh !== "white"){
                this.setState({bgColorCh: `${this.b2}`})
            }
            if(this.state.bgColorEn !== "white"){
                this.setState({bgColorEn: `${this.b2}`})
            }
            if(this.state.colorEn !== "white"){
                this.setState({colorEn: `${this.b2}`})
            }
            if(this.state.colorCh !== "white"){
                this.setState({colorCh: `${this.b2}`})
            }
        }
    }
    handleClick = (e) =>{
        if(this.state.bgColorEn === "white"){
            this.setState({
                bgColorEn: `${this.b1}`,
                colorCh: `${this.b1}`,
                bgColorCh: "white",
                colorEn: "white",
            })
        }
        else{
            this.setState({
                bgColorCh: `${this.b1}`,
                colorCh: "white",
                bgColorEn: "white",
                colorEn: `${this.b1}`,
            })
        }
    }
    render(){
        let s = '';
        if(this.state.hover === true){
            s = "0px 0px 5px rgba(0, 0, 0, 0.349019607843137)";
        }
        return(
            <div className="Header">
                <div className="headerLogo">
                    <a href="index.html">
                        <img alt="Logo" title={this.props.headerInfo.logoTitle} src={this.props.headerInfo.logo} />
                    </a>
                </div>
                <div className="lang"  onClick={()=>{this.props.handleLang(); this.handleClick()}} onMouseEnter={this.handleSelect} onMouseLeave={this.handleSelect}>
                    <div className= "ch"  style={{backgroundColor:this.state.bgColorCh, boxShadow:`${s}`}} >
                        <div style={{ color:this.state.colorCh}} >中文</div>
                    </div>
                    <div className="en" style={{backgroundColor:this.state.bgColorEn, boxShadow:`${s}`}}>
                        <div  style={{ color:this.state.colorEn}}>Eng</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
