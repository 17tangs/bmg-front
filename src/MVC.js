import React, {Component} from 'react';
import Feature from './Feature';
import Fade from 'react-reveal/Fade';
import Footer from './Footer'
import Reveal from 'react-reveal/Reveal';
import './MVC.css';


class MVC extends Component{
    render(){
        return(
            <div className="Product">
                <div className='top'>
                    <div className="imgContainer">
                        {/* <img src={require('./img/2.png')}/> */}
                    </div>
                    <div className='left'>
                        <div className='words'>
                            <div className="header">
                            <Reveal effect="animated slideInLeft" delay={0}>
                                <h1 style={{marginLeft:'0', paddingLeft:'0'}}>Medvision Cloud</h1>
                            </Reveal>
                        </div>
                        <div className="p">
                            <Reveal effect="animated fadeIn">
                                <p id='mission'>Through combining Cloud PACS and Dr. Lotus AI together, Medvision Cloud for Business, a Cloud-based Picture Archiving and Communication System featuring AI-aided Diagnosis in Medical Imaging, aims to optimize medical resource allocation and improve the efficiency and accuracy of medical image diagnosis.</p>
                            </Reveal>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='features'>
                    <Feature img = {require('./img/one4all.png')} title='One for All' description='Easily manage medical images of all modalities on any device'/>
                    <Feature img = {require('./img/AI.png')} title='AI Ready' description='Accelerate your diagnosis process using Dr Lotus AI'/>
                    <Feature img = {require('./img/security.png')} title='Security on Duty' description='Move to the reliable cloud with 24/7 security'/>
                </div>
                <div className = "getStarted">
                    <div className = "getStartedL">
                        <h1>Get experience in Dr. Lotus AI</h1>
                        <p>Free Trial to experience AI-aided diagnosis services in medical imaging.</p>
                        <div className = "button"><a href="http://kyra.bostonmeditech.com/indexEn.html" target='_blank'>Get started for free</a></div>
                    </div>
                    <div className = "getStartedR">
                        <div className = "getStartedImg"/>
                    </div>
                </div>
            <Footer />
            </div>
        )
    }
}
export default MVC;
