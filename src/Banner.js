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
    generateKeywords = () =>{
        let keyDiv = []
        this.props.data.list.forEach((k) => keyDiv.push(<span>{k}</span>));
        return keyDiv;
    }

    render(){
        let data = this.props.data;
        return(
            <div style={{background: `url(${require('./img/bg1.jpeg')}) no-repeat`, backgroundSize: "100% 140%"}} className="banner" >
                <Particles className='particles particleContainer' params={particleOptions}/>
                <div className="shadow" />
                <div className="regionSplitVL" >
                    <div className="med1"> <span style={{color:'red'}} > {data.verb}</span> {data.sentence}
                        <div class="pushEffect">
                            {this.generateKeywords()}
                        </div>
                    </div>
                </div>
                <div className="regionSplitVR" />
            </div>
        )
    }
}

export default Banner;
