import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import uuid from "react-uuid"

const status=["started","completed"]
let x=Math.floor(Math.random()*2)
console.log(x)
class Todos extends Component{
    state={taskName:'',user:"",taskFocus:false,userfocus:false}
     
    changeName=(e)=>{
        this.setState({taskName:e.target.value})
    }
    changeUser=(e)=>{
        this.setState({user:e.target.value})
    }
   
    render(){
        const {taskName,user,lostFocus,userFocus}=this.state
        const {modal,toggle,save}=this.props

        const handleTask=()=>{
          if (taskName===""&&user===""){
             this.setState({lostFocus:true,userFocus:true})
          }
          else if (taskName===""){
             this.setState({lostFocus:true})
          }
          else if (user===""){
             this.setState({userFocus:true})
          }
          else{

          
            
        let taskObj={}
        taskObj["id"]=uuid()
        taskObj["task"]=taskName
        taskObj["description"]=`${taskName} is good for coding`
        taskObj["status"]=status[x]
        taskObj["userId"]=user
        save(taskObj)
        this.setState({taskName:'',user:"user1"})
          }
    }

       return (
    <div>
     <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Task</ModalHeader>
        <ModalBody>
          <form >
            <div className="form-group">
              <label htmlFor="task">Task Name</label>

            <input id="task" type="text" className="form-control"  value={taskName} onChange={this.changeName}/></div>
            {lostFocus===true?<span style={{fontSize:"12px",color:"red"}}>Enter the task</span>:""}
            <select value={user} onChange={this.changeUser} className="form-control" >
              <option active>user1</option>
              <option>user2</option>
              <option>user3</option>
              <option>user4</option>
              <option>user5</option>
              <option>user6</option>
              <option>user7</option>
              <option>user8</option>
            </select>
            {userFocus===true?<span style={{fontSize:"12px",color:"red"}}>Assign to user</span>:""}

          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleTask} >
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
     </div>
  ) 
    }
  

}

export default Todos
