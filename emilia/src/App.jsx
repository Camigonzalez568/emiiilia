import './App.css'
import Home from './componentes/Home'
import MyProvider  from "./context/Provider"

const App = () => {
  return (
    < >
      <MyProvider>
         
          <Home/>
      </MyProvider>
    </>
  )
}

export default A