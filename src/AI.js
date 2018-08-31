import React, {Component} from 'react';
import './AI.css';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Stat from './Stat';
import Model from './Model';
import Media from "react-media";

class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            c: '',
            p: '',
            show: 'n',
        }
    }
    handleHover = (e) =>{
        if(e === 'A2'){
            this.setState({show: 'b', p:'97.1', c:'animated fadeInDown'})
        }
        else if(e === 'A1'){
            this.setState({show: 'm', p:'93.6', c:'animated fadeInUp'})
        }
        else if(e === 'A3'){
            this.setState({show: 'b', p:'98.9', c:'animated fadeInDown'})
        }
        else{
            this.setState({show: 'n', c:''})
        }
    }
    render(){
        let benign,malignant;
        this.state.show === 'b' ? benign = 'block' : benign = 'none';
        this.state.show === 'm' ? malignant = 'block' : malignant = 'none';
        return(
            <Media query="(max-width:1100px)">
                {matches =>
                    matches ? (
                        <div className="About2">
                            <div className="top">
                                <Flip top>
                                    <h1 style={{color:`var(--main-blue)`}}>Model  </h1>
                                 </Flip>
                                 <Fade left>
                                     <h2>Cutting edge deep learning models, on the cloud.</h2>
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
                            <Model handleHover={this.handleHover}/>
                        </div>
                ):(
                    <div className="About">
                        <div className = "left">
                            <Flip top>
                                {/*AI <span style={{color:`var(--main-text)`}}>&</span> Big Data*/}
                            <h1 style={{color:`var(--main-blue)`}}>Model  </h1>
                            {/* <div data-aos = 'fade-right'> */}
                        </Flip>
                        <Fade left>
                            <h2>Cutting edge deep learning models, on the cloud.</h2>
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
                            <div className="annotation">
                                <div className="annotateImg">
                                    <h4>Image data</h4>
                                </div>
                                <div className="imgLine"/>
                                <div>
                                    <div className={`benign ${this.state.c}`} style={{display:`${benign}`}}>
                                        <div className="text">{this.state.p}% Benign</div>
                                        <div className="line"/>
                                    </div>
                                    <div className={`malignant ${this.state.c}`} style={{display:`${malignant}`}}>
                                        <div className="line"/>
                                        <div className="text">{this.state.p}% Malignant</div>
                                    </div>
                                </div>
                                <Model handleHover = {this.handleHover}/>
                            </div>

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
