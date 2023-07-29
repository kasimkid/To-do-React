import React from "react"



const Tareas = ({listaTarea,deletItem}) => {
  
  

  return (
    <>
      <ul>
      {listaTarea?.map((element, index)=> {
        return(
        <li className="tarea-asignada" key={index}>{element} <button className="btns" onClick={deletItem}>x</button></li>
        )
      })}
      </ul>
      
    </>


  )
}

export default Tareas
