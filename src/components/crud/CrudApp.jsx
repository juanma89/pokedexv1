import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApp = () => {
  const [editData, setEditData] = useState(null);
  const [equipos, setEquipos] = useState(() => {
    try {
      const saveEquipos = window.localStorage.getItem("equiposData");
      return saveEquipos ? JSON.parse(saveEquipos) : [];
    } catch (error) {
      console.error("Error al parsear JSON desde localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("equiposData", JSON.stringify(equipos));
  }, [equipos]);

  //AGREGAR UN EQUIPO
  const addEquipo = (equipo) => {
    setEquipos([...equipos, equipo]);
  };

  //EDITAR UN EQUIPO
  const editEquipo = (equipo) => {
    const newEquipos = equipos.map((el) => (el.id === equipo.id ? equipo : el));
    setEquipos(newEquipos);
    setEditData(null);
  };

  //ELIMINAR UN EQUIPO
  const deleteEquipo = (id) => {
    const isDelete = window.confirm(
      `¿Deseas eliminar el registro con el id: ${id}`
    );

    if (isDelete) {
      const newEquipos = equipos.filter((el) => el.id !== id);
      setEquipos(newEquipos);
    }
  };

  return (
    <>
      <h2>CRUD de equipos de Football</h2>
      <CrudForm
        addEquipo={addEquipo}
        editEquipo={editEquipo}
        editData={editData}
      />
      <CrudTable
        equipos={equipos}
        setEditData={setEditData}
        deleteEquipo={deleteEquipo}
      />
    </>
  );
};

export default CrudApp;
