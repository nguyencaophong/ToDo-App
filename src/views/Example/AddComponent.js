import React from "react";

class AddComponent extends React.Component{
    state={
        title:'',
        salary:''
    }

    handleChangefirstName = (e)=>{
        this.setState({
            title: e.target.value
        })
    }
    
    handleChangelastName = (e)=>{
        this.setState({
            salary: e.target.value
        })
    }

    handleClickMe = (e) =>{
        e.preventDefault()
        console.log('>>> Check state:',this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary:''
        })
    }

    render(){
        return (
            <>
            <form>
                    <label htmlFor="fname">Title Job: </label><br />
                    <input type="text" id="fname" name="fname" 
                    value={this.state.title}
                    onChange ={(e) => this.handleChangefirstName(e)}
                    /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" id="lname" name="lname" 
                    value={this.state.salary}
                    onChange ={(e) => this.handleChangelastName(e)}
                    /> <br />
                    <input type="button" value="submit" 
                    onClick={(e) => this.handleClickMe(e)}
                    />
                </form>
            </>
        )
    }
}

export default AddComponent;



