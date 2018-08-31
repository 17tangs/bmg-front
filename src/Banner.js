import React, { Component } from 'react';
import './Banner.css';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';

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
            <div style={{background: `url(${require('./img/bg1.jpeg')}) no-repeat`, backgroundSize: "100% 140%"}} className="banner" >
                <Particles className='particles particleContainer' params={particleOptions}/>
                <div className="shadow" />
                <div className="regionSplitVL" >
                    <div className="med1"> <span style={{color:'red'}} > Eliminating </span> women's breast cancer using
                        <div class="pushEffect">
                          <span>AI</span>
                          <span>Big Data</span>
                          <span>Cloud</span>
                        </div>
                    </div>

                        {/* {this.props.bannerData.header}</p> */}
                    {/* <div>
                        <div className="med4" onMouseOver={this.handleSelect} onMouseOut={this.handleSelect}>
                            <div className="starthere">
                                <span>{this.props.bannerData.start.en}</span>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="regionSplitVR" />
            </div>
        )
    }
}

export default Banner;
