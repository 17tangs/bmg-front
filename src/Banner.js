import React, { Component } from 'react';
import './Banner.css';
import Particles from 'react-particles-js';


const particleOptions = {particles: {
    number:{
        value:30,
        density:{
            enable:true,
            value_area: 800
        }
    }
}};
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
            //http://bostonmeditech.com/wp-content/uploads/2017/04/qtq50-583Xtc.jpeg
            <div style={{background: `url(http://bostonmeditech.com/wp-content/uploads/2017/04/qtq50-583Xtc.jpeg) no-repeat`, backgroundAttachment:'fixed', backgroundSize: "auto 140%"}} className="banner" >
                {/* <Particles className='particles particleContainer' params={particleOptions}/> */}
                <div className="shadow" />
                <div className="regionSplitVL" />
                <div className="regionSplitVR" >
                    <p className="med1">{this.props.bannerData.header}</p>
                    <div>
                        <div className="med4" onMouseOver={this.handleSelect} onMouseOut={this.handleSelect}>
                            <div className="starthere">
                                <span>{this.props.bannerData.start.en}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;
