import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component{
    state={
        content:''
    }

    handleOnchangeContent(e){
        this.setState({
            content:e.target.value
        })
    }

    addNewConentItem(){
        if(!this.state.content){
            toast.error('Missing input!!!')
            return;
        }
        
        let itemTodo = {
            id: Math.floor(Math.random() * 1001),
            content: this.state.content
        }
        this.props.addItem(itemTodo)

        this.setState({
            content:''
        })
    }

    render(){
        let {content} = this.state;
        return (
            <>
                    <div className="container-input-header">   
                        <input className="input-infor-header"value={content} onChange={(e) =>{this.handleOnchangeContent(e)}}/>
                        <i className="fa-solid fa-arrow-up-right-from-square container-input-icon"
                        onClick={() => this.addNewConentItem()}
                        ></i>
                    </div>
            </>
        )
    }
}


export default AddTodo;
