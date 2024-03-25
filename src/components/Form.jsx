import React, { Fragment, useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";


export default function Form(){
    const [newItem2, setNewItem2] = useState("");
    const [words2, setWord2] = useState([])
    const nodeRef2 = React.useRef(null);


    function handleSubmit2(e2){
        e2.preventDefault()
        setWord2(currentWords2 => {
            return [
                ...words2, 
                {id : crypto.randomUUID(), title : newItem2},
            ] 
        })
    }
    console.log(words2)

   return( 
    <>
    <form onSubmit={handleSubmit2} className = "form">
        <div className="d-flex flex-column box" >
            <label className="doveritalic" htmlFor="item" > What are you trying to say?                         <a className = "add-button" onClick ={ handleSubmit2} > ↵ </a>
            </label>
            <input
            value = {newItem2}
            onChange={e2 => setNewItem2(e2.target.value)}
            type="text"
            id="item" />
        </div>
        
    </form>
    {words2.map((word2, index2) => {
            return (
            <Draggable
            nodeRef={nodeRef2}
            key = {index2}
            >
            <button className= "tab absolute" ref={nodeRef2}> {word2.title}</button>
            </Draggable>
        )
        })}
    </>
)



}