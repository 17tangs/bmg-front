import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Cloud from './Cloud';
import Product from './Product';
import AI from './AI';
import {data} from './data.js'
import './animate.css';
import './App.css';
import './rotate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPageScroller from "react-page-scroller";



class App extends Component {
    constructor(props){
        super(props);
        this.reactPageScroller = null;
    }
    componentDidMount(){
        AOS.init({
            duration:1500,
        })
        console.log(AOS);
    }
    goToPage = (pageNumber) => {
      this.reactPageScroller.goToPage(pageNumber);
    }
    render() {
        return (

            <div className="App">
                <Header headerInfo = {data.headerInfo} handleFeedback = {this.handleFeedback} handleLang = {this.handleLang} handleWechat = {this.handleWechat}/>
                <Product />
                {/* <ReactPageScroller ref={c => this.reactPageScroller = c}>
                    <Banner bannerData = {data.bannerData} />
                    <Cloud />
                    <AI />
                </ReactPageScroller> */}
             {/*  <NewsRegion newsData={data.newsData}/>
              <Footer footerData = {data.footerData} /> */}
            </div>
    );
  }
}

export default App;
