import React, { Component } from 'react';
import Media from 'react-media';
import './Footer.css';


class Footer extends Component{
    render(){
        return(
            <Media query="(max-width: 872px)">
                {matches =>
                    matches ? (
                        <div className="foot">
                            <div className="footline">
                                <p>Copyright © 2017 Boston Meditech Group - Advancing women's healthcare — Lyrical WordPress theme by GoDaddy</p>

                            </div>
                            <div className="footline2" style={{pointerEvents:'none'}}>
                            </div>
                        </div>
                    ) : (
                        <div className="foot">
                            <div className="footline">
                                <p>Copyright © 2017 Boston Meditech Group - Advancing women's healthcare — Lyrical WordPress theme by GoDaddy</p>
                            </div>
                        </div>
                    )
                }
            </Media>
        )
    }
}

export default Footer;
