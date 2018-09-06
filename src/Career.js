import React, {Component} from 'react';
import Job from './Job';
import './Career.css';

class Career extends Component{
    constructor(props){
        super(props);
        this.state = {
            jobs:[],
        }
    }
    componentDidMount(){
        fetch('https://enigmatic-scrubland-29320.herokuapp.com/api').then((r) => {return r.json()}).then((r)=>{
            this.setState({jobs:r});
        })
    }
    generateJobs = () =>{
        let jobDiv = []
        this.state.jobs.forEach((job) => {
            jobDiv.push(<Job title = {job.title}
                             link = {job.link}
                             description = {job.description}
                             location = {job.location}/>);
        });
        return jobDiv;

    }

    render(){
        return(
            <div className="Career">
                <div className="careerBanner">
                    <h1> Career at Boston Meditech Group</h1>
                </div>
                <div className="jobContainer">
                    {this.generateJobs()}
                </div>
            </div>

        )
    }
}
export default Career;
