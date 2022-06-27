import React from "react";


class CRUDItem extends React.Component{

    state = {
        modeEdit: false
    }

    removeContentItem = (item)=>{
        this.props.removeItem(item);
    }

    editContentItem = (item) =>{
        this.props.editTiem(item)
    }

    editMode = () => {
        this.setState({
            modeEdit: !this.state.modeEdit
        })
        
    }

    render(){   
        let {modeEdit} = this.state;
        return (
            <>
            {
                modeEdit === false ?
                <i className="fa-solid fa-pen-to-square container-input-item-icon-item" onClick={()=>this.editMode()}></i>
                :
                <>
                    <input className="" type="text" id="edit" name="edit" value={this.props.item.content}/>
                    <i class="fa-solid fa-floppy-disk" onClick={() => this.editContentItem(this.props.item)}></i>
                </>
            }

                <i className="fa-solid fa-trash-can container-input-item-icon-item" onClick={() => this.removeContentItem(this.props.item)}></i>
            </>
        )
    }
}


export default CRUDItem;