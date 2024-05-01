import React ,{Component} from "react"
import { FaTrash } from "react-icons/fa"
import './index.css'

const color=[
    {
        primaryColor:"#5D93E1",
        secondaryColor:"#ECF3FC"
    },
    {
        primaryColor:"#F9D288",
        secondaryColor:"#FEFAF1"
    },
    {
        primaryColor:"#5DC250",
        secondaryColor:"#F2FAF1"
    },
    {
        primaryColor:"#F48687",
        secondaryColor:"#FdF1F1"
    },
    {
        primaryColor:"#B964F7",
        secondaryColor:"#F3F0FD"
    }
]
class Card extends Component{
     state={isComplete:false}

     changeStatus=()=>{
        this.setState(prev=>{
            const {isComplete}=prev
            return {isComplete:!isComplete}
          })}

          changeCharts=()=>{
            // const {history}=this.props
            // history.push("/charts")
            console.log("muni")
          }
          
    render(){
        const {obj,index,deleteItem} =this.props
        const {isComplete}=this.state
        const handleDelete=(id)=>{
               deleteItem(id)
        }
        return(
            <div className=" card-wrapper mt-5">
                <div className="card-top" style={{backgroundColor:color[index%5].primaryColor}}></div>
                <div className="task-holder">
                <span className="card-header" style={{backgroundColor:color[index%5].secondaryColor,borderRadius:"10px"}}>{obj.task.toUpperCase()}</span>
                <p className="mt-3">{obj.description}</p>
                <p>{obj.userId}</p>
                <div className="icons-section" style={{position:"absolute",right:"20px",bottom:"10px"}}>
                    <button type="button" className="btn " onClick={this.changeStatus} style={{"color":color[index%5].primaryColor}}>{isComplete?"Started":"Completed"}</button>
                    {/* <button type="button" className="btn " onClick={this.changeCharts} style={{"color":color[index%5].primaryColor}}>See Charts</button> */}
                    <FaTrash style={{"color":color[index%5].primaryColor,cursor:"pointer"}}onClick={()=>handleDelete(obj.id)}/>
                </div>
                </div>

                
            </div>

        )
    }
}

export default Card;