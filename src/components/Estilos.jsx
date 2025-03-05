import "./Estilos.css"
import misEstilos from "./Estilos.module.css"

const Estilos = () =>{

    const estilos = {
        backgroundColor: '#124578',
        color: 'white',
        padding: 5
    }

    return <>
    <h1>Estilos...</h1>

    <h3 style={{backgroundColor:'red', width: '100%', padding: 5}}>Estilos dentro de la misma línea</h3>
    <h3 style={estilos}>Estilos con variables</h3>
    <h3 className="success">Estilos en hoja externa</h3>
    <h3 className={misEstilos.error}>Estilos con "module"</h3>
    </>
}

export default Estilos