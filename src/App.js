import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Cloud from './Cloud';
import Contact from './Contact';
import MVC from './MVC';
import Product from './Product';
import AI from './AI';
import {data} from './data.js'
import './animate.css';
import './App.css';
import './rotate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPageScroller from "react-page-scroller";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        this.reactPageScroller = null;
    }
    render(){
        return (
            <div className="App">
                <Header headerPosition="fixed" color = '#FFF' />
                <ReactPageScroller ref={c => this.reactPageScroller = c}>
                    <Banner bannerData = {data.bannerData} />
                    <Cloud />
                    <AI />
                </ReactPageScroller>
            </div>);
    }
}
const Lotus = () =>{
    return(
        <div className="App">
            <Header  headerPosition="absolute" color = '#212121' handleClick={this.handleClick} headerInfo = {data.headerInfo} />
            <Product />
        </div>
    )
}
const MVCPage = () =>{
    return(
        <div className="App">
            <Header color = '#212121'  headerPosition="absolute" handleClick={this.handleClick} headerInfo = {data.headerInfo} />
            <MVC />
        </div>
    );
}
const contact = () =>{
    return(<div className="App">
        <Header color = '#212121'  headerPosition="fixed" />
        <Contact />
    </div>);
}


class App extends Component {
    componentDidMount(){
        AOS.init({
            duration:1500,
        })
    }

    render() {
        return(
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/Lotus" component={Lotus}/>
                <Route path="/MVC" component={MVCPage}/>
                <Route path="/contact" component={contact}/>
            </div>
        </Router>);
        // if(this.state.page === 'Home'){
        //     return (
        //
        //         <div className="App">
        //             <Header color = '#FFF' handleClick={this.handleClick}  headerInfo = {data.headerInfo} />
        //             <ReactPageScroller ref={c => this.reactPageScroller = c}>
        //                 <Banner bannerData = {data.bannerData} />
        //                 <Cloud />
        //                 <AI />
        //             </ReactPageScroller>
        //         </div>
        //     );
        // }
        // else if(this.state.page === 'Lotus AI'){
        //     return (
        //         <div className="App">
        //             <Header color = '#212121' handleClick={this.handleClick} headerInfo = {data.headerInfo} />
        //             <Product />
        //         </div>
        //     );
        // }
        // else if(this.state.page === 'MVC'){
        //     return (
        //         <div className="App">
        //             <Header color = '#212121' handleClick={this.handleClick} headerInfo = {data.headerInfo} />
        //             <MVC />
        //         </div>
        //     );
        // }
        // else if(this.state.page === "Contact Us"){
        //     return(
        //         <div className="App">
        //             <Header color = '#212121' handleClick={this.handleClick} headerInfo = {data.headerInfo} />
        //             <Contact />
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div className="App">
        //             <Header color = '#212121' handleClick={this.handleClick} headerInfo = {data.headerInfo} />
        //             <Product />
        //         </div>
        //     )
        // }
  }
}

export default App;
