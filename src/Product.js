import React, {Component} from 'react';
import Feature from './Feature';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import './Product.css';



class Product extends Component{
    render(){
        return(
            <div className="Product">
                <div className='top'>
                    <div className='left'>
                        <Reveal effect="animated fadeIn" delay='800'>
                        <h1 style={{marginLeft:'0', paddingLeft:'0'}}>Dr. Lotus AI</h1>
                    </Reveal>
                    <Reveal effect="animated fadeInLeft" delay='0'>
                        <p>The artificial intelligence-assisted diagnosis system has realized the application of artificial intelligence and high-risk screening for breast cancer, breast image interpretation, rectal imaging interpretation and other artificial intelligence applications. The breast cancer imaging field has reached the world's leading level. </p>
                    </Reveal>
                    </div>
                    <div className='right'>
                        <div className="imgContainer">
                            <img src={require('./img/product1.png')} />
                        </div>
                    </div>
                </div>
                <div className='features'>
                        <Feature img = {require('./img/accuracy.png')} title='High Accuracy' description='The detection rate of the lesion is as high as 96% with high stability and consistency, better than the diagnoses of professional doctors.'/>
                        <Feature img = {require('./img/speed.png')} title='Instant Detection' description='Diagnose in seconds. Save more than 80% of the analyzing time for doctors, relieve the pressure of diagnosis and treatment'/>
                        <Feature img = {require('./img/reliable.png')} title='Reliable Data' description='Uses top hospitals data obtained from the diagnoses and guidance of authoritative experts in the industry.'/>
                </div>
                <div className = 'process'>
                    <div className="left" >
                        <div className="processContainer">
                            <img src={require('./img/cycle.png')} style={{height:'400px', width:'400px'}}/>
                            <div data-aos = "fade-right" className = "annotate1">
                                <div className="text"> Remote visit, green transfer </div>
                                <div className="line" />
                            </div>
                            <div data-aos = "fade-right" className = "annotate2">
                                <div className="text"> Appointment Reminder Customer Service </div>
                                <div className="line" />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h2>Diagnosis Made Easy.</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae sapiente vero, dolor officia fuga adipisci fugiat ut iste dolorum quaerat quis quam eos libero? Reiciendis provident suscipit adipisci dignissimos necessitatibus.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;
