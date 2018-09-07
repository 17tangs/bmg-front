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
                 description1: "Here at Boston Meditech Group, we strive to use modern technology to advance women’s healthcare. Since breast cancer is one of the leading death cause for women, our first efforts focus on eliminating woman’s breast cancer using AI technology to improve the efficiency and accuracy  of early diagnosis of the breast cancer in  mammography and pathology images.",
                 description2: '',
                 img1: './img/focus1.jpg',
                 img2: './img/pathology.png',
                 }
let AIData = {title: "Model",
              subtitle: 'Cutting edge deep learning models, on the cloud',
              description1: 'We utilize state of the art deep learning models like convolutional neural networks and recurrent neural network to train tens of thousands of labeled mammography images over hundreds of hours. The result is classification of malignant lesions more accurate than ever before.',
              description2: 'Not only is the modeled trained by large dataset of professionally labeled image, as users upload their personal mammography images we utilize that data to continuously improve our model for optimal results.',
              stats:[{
                    number: '1.5',
                    unit: 's',
                    description: 'Prediction time'
                },{
                    number: '100k',
                    unit: '',
                    description: 'Images trained'
                },{
                    number: '94.3',
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
