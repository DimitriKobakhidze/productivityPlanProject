import React from "react";
import downArrow from "../Images/down-arrow.png"
import {IoIosArrowDropdown} from "react-icons/io"


const days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
export default function Form(props){
    const [appearForm,setAppearForm] = React.useState(false)
    const [inputData,setInputData] = React.useState({day:"monday",toDo:{work:"",time:""}})

    function updatePlan(e){
        e.preventDefault()
        if(inputData.day && inputData.toDo.work){
            props.setPlanData(prev =>({
                ...prev,
                [inputData.day] : [...prev[inputData.day],inputData.toDo]
            }))
            setInputData(prev => ({...prev,toDo:{...prev.toDo,work:""}}))
        }else{
            window.alert("Type Something In toDo")
        }
    }

    function getInput(e){
        if(e.target.name == "day"){
            setInputData(prev =>({
                ...prev,
                [e.target.name] : e.target.value
            }))
        }else{
            setInputData(prev =>({
                ...prev,
                toDo:{...prev.toDo,[e.target.name] : e.target.value}
            }))
        }
    }

    return(
        <main>
            <div className="appear-form" onClick={() => setAppearForm(prev => !prev)}>
                <h2 className="appear-caption">Add Plan</h2>
                <IoIosArrowDropdown className="add-arrow" />
            </div>
            <form className={`main-form ${appearForm ? "visible" : ""}`} onSubmit={updatePlan}>
                <label htmlFor="select">Choose Day</label>
                <select id="select" onChange={getInput} name="day">
                    {days.map((item,id) => <option key={id} value={item} >{item}</option>)}
                </select>
                <label htmlFor="time-input">Time (optional)</label>
                <input id="time-input" type="text" className="todo-input" onChange={getInput} name="time" value={inputData.toDo.time}></input>
                <label htmlFor="todo">Your Todo</label>
                <input id="todo" type="text" className="todo-input" onChange={getInput} name="work" value={inputData.toDo.work}></input>
                <button type="submit" className="form-button">Add Plan</button>
            </form>
        </main>
    )
}