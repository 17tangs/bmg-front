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
    handleSelect = (e) =>{
        e.type === "mouseover" ? this.setState({'select':'block'}) : this.setState({'select':'none'})
    }

    render(){
        return(
            <div style={{background: `url(${require("./img/bg2.jpg")}) no-repeat`, backgroundAttachment:'fixed', backgroundSize: "auto 120%"}} className="banner" >
                <p className="med1">{this.props.bannerData.header}</p>
                <div className="medlang">
                    <div className="rw-words" style = {{pointerEvents:'none'}}>
            		</div>
                </div>
                <div>
                    <div className="med4" onMouseOver={this.handleSelect} onMouseOut={this.handleSelect}>
                        <div className="starthere">
                            <span>{this.props.bannerData.start.en}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;
