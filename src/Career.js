import React, {Component} from 'react';
import Job from './Job';
import './Career.css';

class Career extends Component{
    constructor(props){
        super(props);
        this.state = {
            noJob: false,
            jobs:[],
        }
    }
    componentDidMount(){
        let remote = 'https://enigmatic-scrubland-29320.herokuapp.com/api';
        let local = 'https://localhost:5000/api'
        fetch(remote).then((r) => {return r.json()}).then((r)=>{
            if(r.length > 0){
                this.setState({jobs:r});
            }
            else{
                this.setState({noJob: true});
            }
        }).catch(error => console.error('Error:', error));

    }
    generateJobs = () =>{
        if(this.state.noJob){
            return(
                <div> Sorry, no jobs available right now. </div>
            )
        }
        else{
            let jobDiv = []
            this.state.jobs.forEach((job) => {
                jobDiv.push(<Job title = {job.title}
                                 link = {job.link}
                                 description = {job.description}
                                 location = {job.location}/>);
            });
            return jobDiv;
        }
    }

    render(){
        return(
            <div className="Career">
                <div className="careerBanner">
                    <h1> Careers at Boston Meditech Group</h1>
                </div>
                <div className="jobContainer">
                    {this.generateJobs()}
                </div>
            </div>

        )
    }
}
export default Career;
