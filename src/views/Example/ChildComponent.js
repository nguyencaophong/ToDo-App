import React from "react";

class ChilComponent extends React.Component{

    state = {
        showJobs: false
    }

    handleShowHide = () =>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    deleteItems = (job) =>{
        this.props.deleteJob(job)
    }

    render() {
        let {arrJobs} = this.props
        let {showJobs} = this.state;
        let check = showJobs === true ? 'showJobs = true': 'showJobs = false';


        return (
            <>
            {
                showJobs === false ?
                <div>
                    <button 
                    onClick={() =>{
                    this.handleShowHide()
                    }}>Show</button>
                </div>
            :
                <>
                    <div className="job-lists">
                        {
                            arrJobs.map((item,index) =>{
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $
                                        <span onClick={() =>{
                                            this.deleteItems(item)
                                        }}>  X
                                        </span>
                                        </div>
                                    )
                                
                            })
                        }
                    </div>
                    <div>
                        <button onClick={() =>{
                        this.handleShowHide()
                        }}>Hide</button>
                    </div>
                </>
            }
            
            </>
        )
    }
}


export default ChilComponent;
    