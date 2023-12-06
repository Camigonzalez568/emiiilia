import Cards from './Cards'
import { useContext } from "react"
import { ContextProvider } from "../context/Provider";
import Modal from './Modal';
function Home() {
    const {modalOn, setModalOn} = useContext(ContextProvider);
  return (
    <div>

       <button onClick={()=>setModalOn(true)}>Agregar Cards</button>
        {!modalOn&&<Cards/>}
        {modalOn &&<Modal/>}
    </div>
  )
}

export default Home