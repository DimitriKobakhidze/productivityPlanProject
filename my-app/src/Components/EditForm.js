import React from "react";



export default function EditForm(props){

    const [appearForm,setAppearForm] = React.useState(false)
    const [inputData,setInputData] = React.useState({day:props.day,toDo:{work:props.work,time:props.time}})
    
    function updatePlan(e){
        
    }
    function getInput(e){
        setInputData(prev =>({
            ...prev,
            toDo:{...prev.toDo,[e.target.name] : e.target.value}
        }))
    }
    return(
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
    )
}