import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import NewsRegion from './NewsRegion';
import Footer from './Footer';
import {data} from './data.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header headerInfo = {data.headerInfo} handleFeedback = {this.handleFeedback} handleLang = {this.handleLang} handleWechat = {this.handleWechat}/>
          <Banner bannerData = {data.bannerData} />
          <NewsRegion newsData={data.newsData}/>
          <Footer footerData = {data.footerData} />
      </div>
    );
  }
}

export default App;
