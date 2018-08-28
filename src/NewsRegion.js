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
                        <div className="regionFull n">
                            <Card pos='l' cardData={this.props.newsData.cardData[0]}/>
                            <Card pos='r' cardData={this.props.newsData.cardData[1]}/>
                        </div>
                    ) : (
                        <div className="regionFull n">
                            <Card pos='l' cardData={this.props.newsData.cardData[0]}/>
                            <Card pos='r' cardData={this.props.newsData.cardData[1]}/>
                        </div>
                    )
                }
            </Media>
        )
    }
}

export default NewsRegion;
