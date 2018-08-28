import React, { Component } from 'react';
import './Banner.css';


class Banner extends Component{
    constructor(){
        super();
        this.state={
            select: 'none',
            bgColorCh: "white",
            colorCh: "white",
            bgColorEn: "white",
            colorEn: "white",
        }
    }
    generateScrollText = () =>{
        let s = []
        this.props.bannerData.langs.forEach((lang,i) => {
            s.push(<div key = {i}>
                <h2>{lang.name}</h2>
                <p>{lang.description}</p>
            </div>
            );
        })
        return s;
    }
    handleSelect = (e) =>{
        e.type === "mouseover" ? this.setState({'select':'block'}) : this.setState({'select':'none'})
    }
    handleCh = (e) =>{
        this.setState({
            bgColorCh: "white",
            colorCh: "var(--main-blue)",
            bgColorEn: "var(--main-blue)",
            colorEn:"white",
        })

    }
    handleEn = (e) =>{
        this.setState({
            colorCh: "white",
            bgColorCh: "var(--main-blue)",
            colorEn: "var(--main-blue)",
            bgColorEn:"white",
        })

    }

    render(){
        return(
            <div style={{background: `url(${require("./img/bg2.jpg")}) no-repeat`, backgroundAttachment:'fixed', backgroundSize: "auto 120%"}} className="banner" >
                <p className="med1">{this.props.bannerData.header}</p>
                <div className="medlang">
                    <div className="rw-words" style = {{pointerEvents:'none'}}>
                        {this.generateScrollText()}
            		</div>
                </div>
                <div>
                    <div className="med4" onMouseOver={this.handleSelect} onMouseOut={this.handleSelect}>
                        <div className="starthere">
                            <p>{this.props.bannerData.start.ch}</p>
                            <span>{this.props.bannerData.start.en}</span>
                        </div>
                        <div className="langselect" style = {{display: this.state.select}}>
                            <a className="china" href="inter.html" onMouseOver={this.handleCh} style={{backgroundColor:this.state.bgColorCh, color:this.state.colorCh}} >中文</a>
                            <a className="english" href="interEn.html" onMouseOver={this.handleEn} style={{backgroundColor:this.state.bgColorEn, color:this.state.colorEn}} >English</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;
