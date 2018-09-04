import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            nameAnimation:'',
            emailAnimation:'',
            contentAnimation:'',
        }
    }
    onFocus = (e) =>{
        if(e.target.id === "name"){
            this.setState({
                nameAnimation: 'focus',
            })
        }
        else if(e.target.id === "email"){
            this.setState({
                emailAnimation: 'focus',
            })
        }
        else if(e.target.id === "content"){
            this.setState({
                contentAnimation: 'focus'
            })
        }
    }
    onBlur = (e) =>{
        if(e.target.id === "name"){
            this.setState({
                nameAnimation: 'blur',
            })
        }
        else if(e.target.id === "email"){
            this.setState({
                emailAnimation: 'blur',
            })
        }
        else if(e.target.id === "content"){
            this.setState({
                contentAnimation: 'blur',
            })
        }
    }
    render(){
        return(
            <div className="Contact">
                <div className="contactTop">
                </div>
                <div className="contactContent">
                    <div className="contactLeft">
                        <form id="contact" onSubmit={this.handleSubmit}>
                        <h2> Leave a Message </h2>
                            <input placeholder="Name" onFocus = {this.onFocus} onBlur={this.onBlur} id="name" type="text" tabIndex="1" required maxLength="20" autoFocus/>
                            <div className= {`contactLine ${this.state.nameAnimation}Left`}/>
                            <input placeholder="Email" onFocus = {this.onFocus} onBlur={this.onBlur} id="email" type="email" tabIndex="2" required maxLength="30"/>
                            <div className= {`contactLine ${this.state.emailAnimation}Left`}/>
                            <div className="contactMessage">
                                <textarea placeholder="Content" onFocus={this.onFocus} onBlur={this.onBlur} id="content" tabIndex="3" required maxLength="500"></textarea>
                                <div className={`topBox ${this.state.contentAnimation}Left`} id="top"/>
                                <div className={`bottomBox ${this.state.contentAnimation}Right`} id="bottom"/>
                                <div className={`leftBox ${this.state.contentAnimation}Top`} id="left"/>
                                <div className={`rightBox ${this.state.contentAnimation}Bottom`} id="right"/>
                            </div>
                            <button>Send </button>
                        </form>

                    </div>
                    <div className="divider" />
                    <div className="contactRight">
                        <div id="info">
                        <h2> Contact Us </h2>
                        <h4>Email: </h4> <span><a href="mailto:info@bostonmeditech.com">info@bostonmeditech.com </a></span>
                        <h4>Phone: </h4> <span>1-781-270-1513</span>
                        <h4>Address: </h4> <span>15 New England Executive Park, Burlington, MA 01803, U.S.A</span>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
