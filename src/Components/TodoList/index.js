import {Component} from 'react'
import Todos from '../Todos'
import Card from '../Card'
import 'bootstrap/dist/css/bootstrap.min.css'

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './indes.css';

class TodoList extends Component {

   state={modal: false,tasklist:[]}

   componentDidMount(){
    let arr=localStorage.getItem("tasklist")
    if(arr){
      let obj=JSON.parse(arr)
      this.setState({tasklist:obj})
    }
    

   }

   toggle=()=>{
    this.setState(prev=>{
      const {modal}=prev
      return {modal:!modal}
    })
   }

   save=(taskObj)=>{
    const {tasklist}=this.state
    this.toggle()
    this.setState( {tasklist:[...tasklist,taskObj]},()=>localStorage.setItem("tasklist",JSON.stringify(this.state.tasklist)))
   }

   deleteItem=(id)=>{
    const {tasklist}=this.state
    const newList=tasklist.filter((item)=>item.id!==id)
    this.setState({tasklist:newList},()=>localStorage.setItem("tasklist",JSON.stringify(this.state.tasklist)))
   }

  render () {
    const {modal,tasklist}=this.state 
    console.log(tasklist)
    
    return(
    <>
     <div className="header pt-5 text-center" style={{backgroundColor:'#7399bf'}}>
      <h1>Todos List</h1>
     <button className="mt-2 btn btn-primary" type="button" onClick={()=>{this.setState({modal:true})}}>Create Task</button>
     </div>

     <div>
    <Todos modal={modal} toggle={this.toggle} save={this.save} />
     </div>

     <div className="task-container">
      {tasklist.map((item,index)=>
      <Card obj={item} index={index} deleteItem={this.deleteItem}/>)}
     </div>
     

    </>
  )
}
}

export default TodoList;
