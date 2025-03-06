import React from "react";
// import Texto from "./components/Texto";
// import Contador from "./components/Contador";
// import ListaNombres from "./components/ListaNombre";
// import Pokemones from "./components/pokemones";
// import Referencia from "./components/referencia";
// import Estilos from "./components/Estilos";
import CrudApp from "./components/crud/CrudApp";

// import NavScrollExample from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App1 = () => {
  return ( <>
    <div>
      {/* <Texto name="Juan" apellido="Pérez" edad={35} />
      <Texto name="Raúl" apellido="Romero" edad={45} />
      <Contador />
      <Contador />
      <ListaNombres />
      <Pokemones />
      <Referencia />
      <Estilos />
      <NavScrollExample /> */}
      <CrudApp/>
    </div>
    </>
  );
};

export default App1;
