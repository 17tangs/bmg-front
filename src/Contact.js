import React, {Component} from 'react';
import './Contact.css';
var Recaptcha = require('react-recaptcha');

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            gr: '',
            status: '',
            name: '',
            email: '',
            message: '',
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

    handleSubmit = (event) =>{
        let s = {name: this.state.name, email: this.state.email, message: this.state.message, response: this.state.gr}
        event.preventDefault();
        fetch('https://enigmatic-scrubland-29320.herokuapp.com/api', {
          method: 'post',
          body: JSON.stringify(s),
      }).then((response) => {return response.json()}).then((r)=>{if(r === 201){
          this.setState({
              status: 'success!',
          })
          setTimeout(
              function() {
                  this.setState({status: ''});
              }
              .bind(this),
              3000
          );

      }
      else if(r === 400){
          this.setState({
              status: `Please verify you're human`
          })
      }
      else if(r === 402){
          this.setState({
              status: 'email failed to send',
          })
      }});
          window.grecaptcha.reset();
          this.setState({
              name:'',
              email:'',
              message:'',
          })

    }
    handleNameChange = (e) =>{
        this.setState({
            name: e.target.value,
        })
    }
    handleEmailChange = (e) =>{
        this.setState({
            email: e.target.value,
        })
    }
    handleMessageChange = (e) =>{
        this.setState({
            message: e.target.value,
        })
    }
    verifyCallback = (r)=>{
        this.setState({
            gr: r,
        })
    }
    callback = () => {}
    render(){
        let c = 'red';
        if(this.state.status === 'success!'){
            c = 'black'
        }
        return(
            <div className="Contact">
                <div className="contactTop">
                    <h1>Contact Us</h1>
                </div>
                <div className="contactContent">
                    <div className="contactLeft">
                        <div id="info">
                        <h4>Email: </h4> <span><a href="mailto:info@bostonmeditech.com">info@bostonmeditech.com </a></span>
                        <h4>Phone: </h4> <span>1-781-270-1513</span>
                        <h4>Address: </h4> <span>15 New England Executive Park, Burlington, MA 01803, U.S.A</span>
                    </div>
                    </div>
                    <div className="divider" />
                    <div className="contactRight">
                        <form  id="contact" onSubmit={this.handleSubmit}>
                            <input placeholder="Name" value={this.state.name} onChange={this.handleNameChange} onFocus = {this.onFocus} onBlur={this.onBlur} id="name" type="text" tabIndex="1" required maxLength="20" autoFocus/>
                            <div className= {`contactLine ${this.state.nameAnimation}Left`}/>
                            <input placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} onFocus = {this.onFocus} onBlur={this.onBlur} id="email" type="email" tabIndex="2" required maxLength="30"/>
                            <div className= {`contactLine ${this.state.emailAnimation}Left`}/>
                            <div className="contactMessage">
                                <textarea placeholder="Content" value={this.state.message} onChange={this.handleMessageChange} onFocus={this.onFocus} onBlur={this.onBlur} id="content" tabIndex="3" required maxLength="500"></textarea>
                                <div className={`topBox ${this.state.contentAnimation}Left`} id="top"/>
                                <div className={`bottomBox ${this.state.contentAnimation}Right`} id="bottom"/>
                                <div className={`leftBox ${this.state.contentAnimation}Top`} id="left"/>
                                <div className={`rightBox ${this.state.contentAnimation}Bottom`} id="right"/>
                            </div>
                            <div style={{marginLeft:'50px'}}>
                                <Recaptcha sitekey="6Lcxv24UAAAAAGMnangszy5qHs3QZCy-EXgbCsBL"     verifyCallback={this.verifyCallback} onloadCallback={this.callback} render="explicit"/>
                            </div>
                            <div className="submitRegion">
                                <input id="submit" type="submit" value="Submit" />
                                <h4 style={{color:c}}>{this.state.status}</h4>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        )
    }
}

export default Contact;
