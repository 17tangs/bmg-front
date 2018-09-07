import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Focus from './Focus';
import Contact from './Contact';
import Career from './Career';
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

let tabs = ['Home', 'Lotus AI', 'MVC','Careers', 'Contact Us']
let bannerData = {verb: 'Eliminating', sentence:"women's breast cancer using", list: ['AI', 'Big Data', 'Cloud']}
let focusData = {title: 'Focus',
                 subtitle: 'Using Machine Learning to diagnose breast cancer in mammography and pathology images',
                 description1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit reiciendis voluptatibus, veniam facere autem voluptatum odit nisi ad! Reprehenderit, vitae accusamus blanditiis impedit laudantium ad rem beatae ipsam alias veritatis!',
                 description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, praesentium earum harum sed consequatur doloremque obcaecati rerum esse, similique aut sapiente voluptatibus voluptates quasi, sit hic accusamus. Odit, mollitia, vitae.',
                 img1: './img/focus1.jpg',
                 img2: './img/pathology.png',
                 }
let AIData = {title: "Model",
              subtitle: 'Cutting edge deep learning models, on the cloud.',
              description1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum vel officia molestias nulla, delectus, iste ut magnam rem asperiores quibusdam, ratione sed alias vitae illum cum nam earum soluta. Soluta.',
              description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab a pariatur, temporibus modi quas voluptas adipisci ea eos praesentium, officia. Enim neque ipsam modi facere qui eius repellat ipsum. Velit.',
              stats:[{
                    number: '1.5',
                    unit: 's',
                    description: 'Prediction time'
                },{
                    number: '20000',
                    unit: '',
                    description: 'Images trained'
                },{
                    number: '92',
                    unit: '%',
                    description: 'Model AUC'
                }
              ]


}
class Home extends Component{
    constructor(props){
        super(props);
        this.reactPageScroller = null;
    }
    render(){
        return (
            <div className="App">
                <Header headerPosition="fixed" tabs={tabs} color = '#FFF' />
                <ReactPageScroller ref={c => this.reactPageScroller = c}>
                    <Banner data = {bannerData} />
                    <Focus data={focusData}/>
                    <AI data={AIData} />
                </ReactPageScroller>
            </div>);
    }
}
const Lotus = () =>{
    return(
        <div className="App">
            <Header  headerPosition="absolute" tabs={tabs} color = '#212121' />
            <Product />
        </div>
    )
}
const MVCPage = () =>{
    return(
        <div className="App">
            <Header color = '#212121' tabs={tabs}  headerPosition="absolute" />
            <MVC />
        </div>
    );
}
const CareerPage = () =>{
    return(
        <dvi className="App">
            <Header color = "#212121" tabs={tabs} headerPosition="absolute" />
            <Career />
        </dvi>
    )
}
const contact = () =>{
    return(<div className="App">
        <Header color = '#212121' tabs={tabs}  headerPosition="fixed" />
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
                <Route path="/Career" component={CareerPage}/>
                <Route path="/contact" component={contact}/>
            </div>
        </Router>);
  }
}

export default App;
