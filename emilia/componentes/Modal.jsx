import { useContext, useState } from "react"
import { ContextProvider } from "../context/Provider";
import TextField from '@mui/material/TextField';

export default function Modal() {
  const { setModalOn} = useContext(ContextProvider);
  const [nombre, setNombre] = useState("");
  const [posi, setPosi] = useState("");
  const handleNombre=(e)=>{
 
    setNombre(e.target.value)
    console.log(nombre)

  }
  console.log()
  return (
    <div>Modal

        <TextField 
              id="nombre" 
              label="NOMBRE" 
              variant="filled" 
              color="warning"
              type="text"
              value={nombre}
              onChange={handleNombre}/> 
        <TextField 
              id="posi" 
              label="Posición" 
              variant="outlined"
              value={posi} 
              onChange={(e)=>setPosi(e.target.value)}/> 
        <button onClick={()=>setModalOn(false)}>Agregar</button>
    </div>
  )
}