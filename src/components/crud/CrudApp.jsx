import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const baseDatos = [
  { id: 0, equipo: "Barcelona", pais: "España" },
  { id: 1, equipo: "Guadalajara", pais: "México" },
  { id: 2, equipo: "Boca Jr", pais: "Argentina" },
  { id: 3, equipo: "Manchester City", pais: "Inglaterra" },
  { id: 4, equipo: "Barcelona", pais: "España" },
];

const CrudApp = () => {
  const [equipos, setEquipos] = useState(baseDatos);

  return (
    <>
      <h2>CRUD de equipos de Football</h2>

      <CrudForm />
      <CrudTable equipos={equipos} />

      {/*Mostrar la información, tarjetas, tablas, vistas, etc */}
    </>
  );
};

export default CrudApp;
