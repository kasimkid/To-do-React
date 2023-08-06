import React, { useState } from "react"
import Tareas from "./componentes/Tareas"
import Error from "./Error"


function App() {

  const [tarea, setTarea] = useState('')
  const [listaTarea, setListaTarea] = useState([])
  const [alert, setAlert] = useState(false)

  const handleChange = (e) => {

    setTarea(e.target.value)

  }



  const handleSubmit = (e) => {
    e.preventDefault()

    if (tarea === "") {
  
      setAlert(true)
       return
    }
    setListaTarea([...listaTarea, tarea])
    setTarea('')
    setAlert(false)
}




  const deletItem = (id) => {

    const deletedTask = listaTarea.filter((tarea, index) => index !== id)
    setListaTarea(deletedTask)

  }



  return (
    <div className="contenedor">
      <div className="lista">
        <h1>To-do List</h1>
        <form onSubmit={handleSubmit}>

          <input type="text" value={tarea} placeholder=" Agree one task" onChange={handleChange} />

        </form>
        {alert ?
          <Error mensaje="Este campo es obligatorio*" />
          : null
        }
        <Tareas listaTarea={listaTarea} deletItem={deletItem} />
        {listaTarea.length > 0 ? (<div><p>{listaTarea.length} items</p></div>) : null}
      </div>
    </div>

  )
}

export default App
