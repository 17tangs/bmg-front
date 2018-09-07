import React, {Component} from 'react';
import './Focus.css';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

class Cloud extends Component{
    render(){
        let data = this.props.data;
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
                return(
                    <div className="Cloud">
                        <div className = "left">
                            <div className="imageContainer">
                                <div className="img2" />
                                <div className="img1" />
                            </div>
                        </div>
                        <div className="right">
                            <Flip top>
                                <h1 style={{color:`var(--main-blue)`}}>{data.title}</h1>
                            </Flip>
                            <Fade left>
                                <h2>{data.subtitle}</h2>
                                <p>{data.description1}</p>
                                <p>{data.description2}</p>
                            </Fade>
                        </div>
                    </div>
                );
            } else {
                return(
                    <div className="Cloud">
                        <div className = "left">
                            <div className="imageContainer">
                                <div className="img2" />
                                <div className="img1" />
                            </div>
                        </div>
                        <div className="right">
                            <h1 style={{color:`var(--main-blue)`}}>{data.title}</h1>
                            <h2>{data.subtitle}</h2>
                            <p>{data.description1}</p>
                            <p>{data.description2}</p>
                        </div>
                    </div>
                )            }

        }
        else{

        }

    }
}

export default Cloud;
