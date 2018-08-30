import React, {Component} from 'react';
import './AI.css';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Stat from './Stat';
import Model from './Model';
import Media from "react-media";

class About extends Component{
    render(){
        return(
            <Media query="(max-width:1100px)">
                {matches =>
                    matches ? (
                        <div className="About2">
                            <div className="top">
                                <Flip top>
                                      <h1 style={{color:`var(--main-blue)`}}>AI <span style={{color:`var(--main-text)`}}>&</span> Big Data</h1>
                                 </Flip>
                                 <Fade left>
                                     <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nesciunt minima, provident ipsam officia distinctio reiciendis error fugit eveniet iste voluptas esse unde doloremque veritatis animi cum voluptatum maiores modi.</p>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nesciunt minima, provident ipsam officia distinctio reiciendis error fugit eveniet iste voluptas esse unde doloremque veritatis animi cum voluptatum maiores modi.</p>
                                 </Fade>
                                 <Fade bottom>
                                     <div className="stats">
                                         <Stat number = '1.5' unit = 's' description = 'prediction time' icon = {require('./img/timeIcon.png')}/>
                                         <Stat number = '20,000' unit = '' description = 'images trained' icon = {require('./img/picIcon.png')}/>
                                         <Stat number = '92' unit = '%' description = 'model AUC' icon = {require('./img/accuracyIcon.png')}/>
                                     </div>
                                </Fade>
                            </div>
                             <Model width='500px'/>
                        </div>
                ):(
                    <div className="About">
                        <div className = "left">
                            <Flip top>
                            <h1 style={{color:`var(--main-blue)`}}>AI <span style={{color:`var(--main-text)`}}>&</span> Big Data </h1>
                            {/* <div data-aos = 'fade-right'> */}
                        </Flip>
                        <Fade left>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nesciunt minima, provident ipsam officia distinctio reiciendis error fugit eveniet iste voluptas esse unde doloremque veritatis animi cum voluptatum maiores modi.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nesciunt minima, provident ipsam officia distinctio reiciendis error fugit eveniet iste voluptas esse unde doloremque veritatis animi cum voluptatum maiores modi.</p>
                        </Fade>
                        <Fade bottom>
                            <div className="stats">
                                <Stat number = '1.5' unit = 's' description = 'prediction time' icon = {require('./img/timeIcon.png')}/>
                                <Stat number = '20,000' unit = '' description = 'images trained' icon = {require('./img/picIcon.png')}/>
                                <Stat number = '92' unit = '%' description = 'model AUC' icon = {require('./img/accuracyIcon.png')}/>
                            </div>
                        </Fade>
                        {/* </div> */}
                        </div>
                        <div className="right">
                        <Model width='100%'/>
                            {/* <div className="imageContainer">
                                <img className="img1" src={require('./img/u25.png')}/>
                                <img className="img2" src={require('./img/u18.jpg')}/>
                            </div> */}
                        </div>
                    </div>
                )}
            </Media>

        )
    }
}

export default About;
