import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import NewsRegion from './NewsRegion';
import Footer from './Footer';
import {data} from './data.js'
import './animate.css';
import './App.css';
import './rotate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


class App extends Component {
    componentDidMount(){
        AOS.init()
        console.log(AOS);
    }
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
