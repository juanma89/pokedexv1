import React from "react"
import Texto from "./components/Texto"
import Contador from "./components/Contador"
import ListaNombres from "./components/ListaNombre"


function App (){
    return <p>Hola a todos</p>
}

const App1 = () => {
    return <div>
        {/* <Texto name="Juan" apellido="Pérez" edad={35}/>
        <Texto name="Raúl" apellido="Romero" edad={45}/>
        <Contador/>
        <Contador/> */}
        <ListaNombres/>
    </div>
}

export default App1;