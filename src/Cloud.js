import React, {Component} from 'react';
import './Cloud.css';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

class Cloud extends Component{
    render(){
        return(
            <div className="Cloud">
                <div className = "left">
                    <div className="imageContainer">
                        <img className="img2" src={require('./img/focus1.jpg')}/>
                        <img className="img1" src={require('./img/focus2.jpg')}/>
                    </div>
                </div>
                <div className="right">
                    <Flip top>
                        <h1 style={{color:`var(--main-blue)`}}>Focus</h1>
                    </Flip>
                    {/* <div data-aos = 'fade-right'> */}
                    <Fade left>
                        <h2>Using Machine Learning to diagnose breast cancer in mammography and pathology images</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nesciunt minima, provident ipsam officia distinctio reiciendis error fugit eveniet iste voluptas esse unde doloremque veritatis animi cum voluptatum maiores modi.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nesciunt minima, provident ipsam officia distinctio reiciendis error fugit eveniet iste voluptas esse unde doloremque veritatis animi cum voluptatum maiores modi.</p>
                    </Fade>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default Cloud;
