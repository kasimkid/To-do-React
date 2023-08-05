import React, { useState } from "react"
import Tareas from "./componentes/Tareas"

function App() {

  const [tarea, setTarea] = useState('')
  const [listaTarea, setListaTarea] = useState([])

  const handleChange = (e) => {

    setTarea(e.target.value)

  }



  const handleSubmit = (e) => {
    e.preventDefault()


    setListaTarea([...listaTarea, tarea])
    setTarea('')


  }


  const deletItem = (id) => {

    const newTask = [...listaTarea]
    newTask.splice(id, 1)
    setListaTarea(newTask)
  }



  return (
    <div className="contenedor">
      <div className="lista">
        <h1>To-do List</h1>
        <form onSubmit={handleSubmit}>

          <input type="text" value={tarea} placeholder=" Agree one task" onChange={handleChange} />

        </form>
        <Tareas listaTarea={listaTarea} deletItem={deletItem} />
        {listaTarea.length > 0 ? (<div><p>{listaTarea.length} items</p></div>) : null}
      </div>
    </div>

  )
}

export default App
