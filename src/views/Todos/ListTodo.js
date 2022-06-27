import React from "react";
import '../../public/fontawesome-free-6.1.1-web/css/all.css'
import './ListTodo.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTodo from "./addTodo";
import CRUDItem from "./crudItem";
import { toast } from 'react-toastify';

class ListTodo extends React.Component{
    state = {
        arrInfor :[
            {id:'infor1',content:'Khoá học Front-End'},
            {id:'infor2',content:'BA cho người mới bắt đầu'},
            {id:'infor3',content:'Lập trình viên chuyên nghiệp'}
        ],
        editTodo: {},
    }

   

    addItem = (item) =>{
        this.setState({
            arrInfor:[...this.state.arrInfor,item],
        })
        toast.success('Wow add new Item success!!!')
    }

    removeItem = (item) =>{

        let currentArritem = this.state.arrInfor;
        currentArritem = currentArritem.filter(items => items.id !== item.id)

        this.setState({
            arrInfor: currentArritem
        })
        toast.success('Delete Item success!!!')
    }

    // editTiem = (item) =>{
    //     let currentArritem = this.state.arrInfor;
    //     const indexOfItem = currentArritem.indexOf(item)
    //     alert(indexOfItem)
    // }

    // modeEditContent = (mode) =>{
    //     this.setState({
    //         modeEdit: mode
    //     })
    //     console.log(mode);
    // }

    handleEditTodo = (item) =>{
        this.setState({
            editTodo: item
        })
    }
    
    handleOneChangeInput1 = (infor) =>{
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.content = infor.target.value;
          
        this.setState({
            editTodo: editTodoCopy
        })

    }

    handleSaveItemTodo = (infor) =>{
        let {arrInfor, editTodo} = this.state;

        // save
        if(editTodo.id === infor.id){
            let listTotoCopy = [...arrInfor];

            let objIndex = listTotoCopy.findIndex(item => item.id === infor.id);

            listTotoCopy[objIndex].content = editTodo.content;

            this.setState({
                arrInfor: listTotoCopy,
                editTodo: {}
            })
            toast.success('Change Infor Item success!!!');
        }
    }


    render(){
        let{arrInfor, editTodo} = this.state;
        const isEmptyobj = Object.keys(editTodo).length === 0;

        return (
            <>
                <div className="container-input">
                    <div className="title-todo-app">What's The Plan for Today?</div>
                    <AddTodo
                    addItem = {this.addItem}
                    />

                    <div className="container container-content-body">
                            {
                                this.state.arrInfor.map((item, index) =>{
                                    return (
                                        <>
                                        <div className="row" key={item.id}>
                                                    <div className="col-md-8 container-input-item" >
                                                        {
                                                            isEmptyobj === true ?
                                                            <span className="container-input-item-content">{index+1} - {item.content}</span>
                                                            :
                                                            <>
                                                            {editTodo.id === item.id ?
                                                            <span>
                                                                {index + 1} - <input className="input-infor" 
                                                                value={editTodo.content} 
                                                                onChange={(event) => this.handleOneChangeInput1(event)}
                                                                />
                                                            </span>
                                                            :
                                                            <span className="container-input-item-content">{index+1} - {item.content}</span>

                                                            }
                                                            </>
                                                        }
                                                    </div>
                                                    <div className="col-md-4 container-input-item-icon" >  
                                                    {
                                                        isEmptyobj === true ?
                                                        <>
                                                            <i className="fa-solid fa-pen-to-square container-input-item-icon-item" onClick={() => this.handleEditTodo(item)}></i>
                                                            <i className="fa-solid fa-trash-can container-input-item-icon-item" onClick={()=>{this.removeItem(item)}}></i>
                                                        </>
                                                        :    
                                                        <>
                                                        { editTodo.id === item.id ?
                                                            <i className="fa-solid fa-floppy-disk container-input-item-icon-item" onClick={() => this.handleSaveItemTodo(item)}></i>
                                                        :
                                                            <>
                                                                <i className="fa-solid fa-pen-to-square container-input-item-icon-item" onClick={() => this.handleEditTodo(item)}></i>
                                                                <i className="fa-solid fa-trash-can container-input-item-icon-item" onClick={()=>{this.removeItem(item)}}></i>

                                                            </>
                                                        }
                                                        </>                                                    
                                                    }   
                                                    </div>
                                        </div>
                                        </>
                              
                                    )
                                })
                            }

                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;