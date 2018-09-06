import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import './Job.css';

class Job extends Component {
    constructor(props){
        super(props);
        this.state={
            color: 'var(--bg-color)'
        }
    }
    hover = (e) =>{
        if(e.type === "mouseover"){
            this.setState({
                color: 'var(--main-blue)'
            })
        }
        if(e.type === "mouseout"){
            this.setState({
                color: 'var(--bg-color)'
            })
        }

    }
    render(){
        return(
            <Fade>
                <div className="Job" onMouseOver={this.hover} onMouseOut={this.hover}>
                    <a href={this.props.link} target="_blank" >
                    <div id="jobTitle" style={{color:this.state.color}}>{this.props.title} </div>
                    <div id="jobLocation">{this.props.location} </div>
                    <div id="jobDescription"> {this.props.description}</div>
                    </a>
                </div>
            </Fade>
        )
    }
}
export default Job;
