import React from "react";
import downArrow from "../Images/down-arrow.png"
import {IoIosArrowDropdown} from "react-icons/io"


const days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
export default function Form(props){
    const [appearForm,setAppearForm] = React.useState(false)
    const [inputData,setInputData] = React.useState({day:"monday",toDo:"",time:"-1"})

    function updatePlan(e){
        e.preventDefault()
        console.log(inputData)
        if(inputData.day && inputData.toDo){
            if(!isNaN(inputData.time)){
                props.setPlanData(prev =>({
                    ...prev,
                    [inputData.day] : [...prev[inputData.day],inputData.toDo]
                }))
                setInputData(prev => ({...prev,toDo:""}))
            }
        }else{
            window.alert("Type Something In toDo")
        }
    }

    function getInput(e){
        setInputData(prev =>({
            ...prev,
            [e.target.name]:e.target.value
        }))
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
                <input id="time-input" type="text" className="todo-input" onChange={getInput} name="time" value={inputData.time}></input>
                <label htmlFor="todo">Your Todo</label>
                <input id="todo" type="text" className="todo-input" onChange={getInput} name="toDo" value={inputData.toDo}></input>
                <button type="submit" className="form-button">Add Plan</button>
            </form>
        </main>
    )
}