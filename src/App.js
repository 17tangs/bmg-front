import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Cloud from './Cloud';
import Contact from './Contact';
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
        this.state={
            page:'Contact Us',
        }
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
    handleClick = (e) =>{
        this.setState({
            page:e.target.id
        });
    }
    render() {
        if(this.state.page === 'Home'){
            return (

                <div className="App">
                    <Header color = '#FFF' handleClick={this.handleClick}  headerInfo = {data.headerInfo} />
                    <ReactPageScroller ref={c => this.reactPageScroller = c}>
                        <Banner bannerData = {data.bannerData} />
                        <Cloud />
                        <AI />
                    </ReactPageScroller>
                </div>
            );
        }
        else if(this.state.page === 'Products'){
            return (
                <div className="App">
                    <Header color = '#212121' handleClick={this.handleClick} headerInfo = {data.headerInfo} />
                    <Product />
                </div>
            );
        }
        else if(this.state.page === "Contact Us"){
            return(
                <div className="App">
                    <Header color = '#212121' handleClick={this.handleClick} headerInfo = {data.headerInfo} />
                    <Contact />
                </div>
            )
        }
        else{
            return (
                <div className="App">
                    <Header color = '#212121' handleClick={this.handleClick} headerInfo = {data.headerInfo} />
                    <Product />
                </div>
            )
        }
  }
}

export default App;
