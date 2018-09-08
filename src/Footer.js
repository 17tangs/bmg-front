import React, { Component } from 'react';
import Media from 'react-media';
import './Footer.css';


class Footer extends Component{
    render(){
        let s;
        if(this.props.front){
            s = 'none'
        }
        else{
            s = '1px solid #CCC'
        }
        return(
            <Media query="(max-width: 872px)">
                {matches =>
                    matches ? (
                        <div className="foot" style={{borderTop:s}}>
                            <div className="footline">
                                <p>Copyright © 2017 Boston Meditech Group - Advancing women's healthcare</p>

                            </div>
                            <div className="footline2" style={{pointerEvents:'none'}}>
                            </div>
                        </div>
                    ) : (
                        <div className="foot" style={{borderTop:s}}>
                            <div className="footline">
                                <p>Copyright © 2017 Boston Meditech Group - Advancing women's healthcare</p>
                            </div>
                        </div>
                    )
                }
            </Media>
        )
    }
}

export default Footer;
