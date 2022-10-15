import React from "react";
import {MdDeleteForever} from "react-icons/md"
import {AiFillEdit} from "react-icons/ai"


const days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]

export default function LiElement(props){
    const [appearForm,setAppearForm] = React.useState(false)
    const [inputData,setInputData] = React.useState({work:props.item2.work,time:props.item2.time})

    function deleteTodo(e){
        const day = e.target.parentNode.parentNode.id
        props.setData(prev =>{
            const copyArray = [...prev[day]]
            const indexInArray = copyArray.indexOf(props.item2)

            copyArray.splice(indexInArray,1)
            return ({
                ...prev,
                [day]:[...copyArray]
            })
        })

    }
    function updatePlan(e){
        e.preventDefault()
        const day = e.target.parentNode.parentNode.id
        if(inputData.work){
            props.setData(prev =>{
                const copyArray = [...prev[day]]
                //item 2 ari is elementi romelic sheesabameba am <li> s da poulob index ro chaanacvlo
                const indexInArray = copyArray.indexOf(props.item2)
                copyArray[indexInArray] = inputData
                return {
                    ...prev,
                    [day]:[...copyArray]
                }
            })
            setAppearForm(false)
        }
    }
    function getInput(e){
        setInputData(prev =>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    return(
        <li>
            <span className="edit-span" onClick={() => setAppearForm(prev => !prev)}><AiFillEdit className="delete-todo" /></span>
            <div className="time-work-div">
                {props.item2.time && <span id="time-span">{props.item2.time}</span>}
                <span className="work-span">{props.item2.work}</span>
            </div>
            <span className="delete-span" id={props.id2} onClick={deleteTodo}><MdDeleteForever className="delete-todo"/></span>
            <form className={`main-form absolute-form ${appearForm ? "visible" : ""}`} onSubmit={updatePlan}>
                <label htmlFor="time-input">Time (optional)</label>
                <input id="time-input" type="text" className="todo-input" onChange={getInput} name="time" value={inputData.time}></input>
                <label htmlFor="todo">Your Todo</label>
                <input id="todo" type="text" className="todo-input" onChange={getInput} name="work" value={inputData.work}></input>
                <button type="submit" className="form-button">Edit Plan</button>
            </form>
        </li>
    )
}