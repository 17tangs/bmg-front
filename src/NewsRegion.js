import React, { Component } from 'react';
import Media from 'react-media';
import Card from './Card';
import './NewsRegion.css';


class NewsRegion extends Component{
    render(){
        return(
            <Media query="(max-width: 872px)">
                {matches =>
                    matches ? (
                        <div>
                        <div className="regionFull">
                            <div className="title" style={{minWidth: "675px", background:`url(${require('./img/bg3.png')})`, backgroundPosition: 'right', backgroundSize:'auto 100%'}}>
                                <div id="companyNews">
                                    <h1>{this.props.newsData.title}</h1>
                                    <p style={{fontWeight:'500'}}>{this.props.newsData.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="regionFull">
                            <Card pos='l' cardData={this.props.newsData.cardData[0]}/>
                            <Card pos='r' cardData={this.props.newsData.cardData[1]}/>
                        </div>
                    </div>
                    ) : (
                        <div className="regionFull">
                            <div className="regionSplitVL">
                                <div className="title" style={{background:`url(${require('./img/bg3.png')})`, backgroundPosition: 'right', backgroundSize:'auto 100%'}}>
                                    <div id="companyNews">
                                        <h1>{this.props.newsData.title}</h1>
                                        <p style={{fontWeight:'500'}}>{this.props.newsData.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="regionSplitVR">
                                <Card pos='l' cardData={this.props.newsData.cardData[0]}/>
                                <Card pos='r' cardData={this.props.newsData.cardData[1]}/>
                            </div>
                        </div>
                    )
                }
            </Media>
        )
    }
}

export default NewsRegion;
