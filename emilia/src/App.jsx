import MyCard from "./componentes/MyCard";
import Provider  from "./context/Provider";

import "./App.css";
// cambiar a useState 
function App() {

    return (
        
        <div>
            <Provider> 
                <Navbar />
                <h1>Album de emilia mami</h1>
                <MyCard />
           </Provider>
      </div>
  );
}

export default A;