import React, {Component} from 'react';
import Footer from './Footer';
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
        let data = this.props.data;
        let benign,malignant;
        this.state.show === 'b' ? benign = 'block' : benign = 'none';
        this.state.show === 'm' ? malignant = 'block' : malignant = 'none';

        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
        return(
            <Media query="(max-width:1100px)">
                {matches =>
                    matches ? (
                        <div className="About2">
                            <div className="AITop">
                                <Flip top>
                                    <h1 style={{color:`var(--main-blue)`}}>{data.title}  </h1>
                                 </Flip>
                                 <Fade left>
                                     <h2>{data.subtitle}</h2>
                                     <p>{data.description1}</p>
                                     <p>{data.description2}</p>
                                 </Fade>
                                 <Fade bottom>
                                     <div className="stats">
                                         <Stat number = {data.stats[0].number} unit = {data.stats[0].unit} description = {data.stats[0].description} icon = {require('./img/timeIcon.png')}/>
                                         <Stat number = {data.stats[1].number} unit = {data.stats[1].unit} description = {data.stats[1].description} icon = {require('./img/picIcon.png')}/>
                                         <Stat number = {data.stats[2].number} unit = {data.stats[2].unit} description = {data.stats[2].description} icon = {require('./img/accuracyIcon.png')}/>
                                     </div>
                                </Fade>
                            </div>
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
                        </div>
                ):(
                    <div>
                    <div className="About">
                        <div className = "left">
                            <Flip top>
                                <h1 style={{color:`var(--main-blue)`}}>{data.title}  </h1>
                             </Flip>
                             <Fade left>
                                 <h2>{data.subtitle}</h2>
                                 <p>{data.description1}</p>
                                 <p>{data.description2}</p>
                             </Fade>
                             <Fade bottom>
                                 <div className="stats">
                                     <Stat number = {data.stats[0].number} unit = {data.stats[0].unit} description = {data.stats[0].description} icon = {require('./img/timeIcon.png')}/>
                                     <Stat number = {data.stats[1].number} unit = {data.stats[1].unit} description = {data.stats[1].description} icon = {require('./img/picIcon.png')}/>
                                     <Stat number = {data.stats[2].number} unit = {data.stats[2].unit} description = {data.stats[2].description} icon = {require('./img/accuracyIcon.png')}/>
                                 </div>
                            </Fade>
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
                        </div>
                    </div>
                    <Footer front={true}/>
                </div>

                )}
            </Media>

        )}
        else{

        return(
            <Media query="(max-width:1100px)">
                {matches =>
                    matches ? (
                        <div className="About2">
                            <div className="AITop">
                                    <h1 style={{color:`var(--main-blue)`}}>{data.title}  </h1>
                                     <h2>{data.subtitle}</h2>
                                     <p>{data.description1}</p>
                                     <p>{data.description2}</p>
                                     <div className="stats">
                                         <Stat number = {data.stats[0].number} unit = {data.stats[0].unit} description = {data.stats[0].description} icon = {require('./img/timeIcon.png')}/>
                                         <Stat number = {data.stats[1].number} unit = {data.stats[1].unit} description = {data.stats[1].description} icon = {require('./img/picIcon.png')}/>
                                         <Stat number = {data.stats[2].number} unit = {data.stats[2].unit} description = {data.stats[2].description} icon = {require('./img/accuracyIcon.png')}/>
                                     </div>
                            </div>
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
                        </div>
                ):(
                    <div className="About">
                        <div className = "left">
                                <h1 style={{color:`var(--main-blue)`}}>{data.title}  </h1>
                                 <h2>{data.subtitle}</h2>
                                 <p>{data.description1}</p>
                                 <p>{data.description2}</p>
                                 <div className="stats">
                                     <Stat number = {data.stats[0].number} unit = {data.stats[0].unit} description = {data.stats[0].description} icon = {require('./img/timeIcon.png')}/>
                                     <Stat number = {data.stats[1].number} unit = {data.stats[1].unit} description = {data.stats[1].description} icon = {require('./img/picIcon.png')}/>
                                     <Stat number = {data.stats[2].number} unit = {data.stats[2].unit} description = {data.stats[2].description} icon = {require('./img/accuracyIcon.png')}/>
                                 </div>
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
                        </div>
                    </div>
                )}
            </Media>

        )}
        }
    }
}

export default About;
