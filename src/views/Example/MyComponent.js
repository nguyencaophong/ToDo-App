import React from "react";
import AddComponent from "./AddComponent";
import ChilComponent from "./ChildComponent";


class MyComponent extends React.Component{
    state = {
        arrJobs:[
            {id:'FrontEnd',title:'Developers',salary:'500'},
            {id:'BackEnd',title:'Developers',salary:'800'},
            {id:'BA',title:'Developers',salary:'300'},
        ]
    }

    addNewJob= (job)=>{

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) =>{
        let currentJobs = this.state.arrJobs;

        currentJobs = currentJobs.filter(item => item.id !== job.id);
        console.log(currentJobs);

        this.setState({
            arrJobs: currentJobs
        })
    }

    
    render() {
        return (
             <>
                <AddComponent
                addNewJob = {this.addNewJob}
                />
                <ChilComponent
                arrJobs= {this.state.arrJobs}
                deleteJob = {this.deleteJob}
                />
             </>
        );
    }
}

export default MyComponent;