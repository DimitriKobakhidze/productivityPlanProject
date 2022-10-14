import React from "react";
import {MdDeleteForever} from "react-icons/md"



export default function Card(props){
    const keysList = React.useMemo(() =>{
        return Object.keys(props.data)
    }
    ,[])

    function deleteTodo(e){
        const day = e.target.parentNode.parentNode.id
        const indexInArray = parseInt(e.target.id)
        props.setData(prev =>{
            const copyArray = [...prev[day]]
            copyArray.splice(indexInArray,1)
            return ({
                ...prev,
                [day]:[...copyArray]
            })
        })

    }
    
    const jsxElements = keysList.map((item,id) =>{
        const toDos = props.data[item]
        return(
            <div className="card-div" key={id}>
                <h1 className="card-day">{item.toUpperCase()}</h1>
                {/* set ul id to item so I can access day and id2 to span so I get index in array when clicking delete */}
                <ul id={item}>
                    {toDos.map((item2,id2) => <li key={id2}>{item2}<span id={id2} onClick={deleteTodo}><MdDeleteForever className="delete-todo"/></span></li>)}
                </ul>
            </div>
        )
    })
    return(
        <div className="plan-main-div">
            {jsxElements}
        </div>
    )
}