import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpFetch } from "../../helpers/helpFetch";

const CrudAPI = () => {
  const API = helpFetch();
  const [editData, setEditData] = useState(null);
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    API.get("equipos").then((response) => {
      if (!response.error) setEquipos(response);
    });
  }, []);

  //AGREGAR UN EQUIPO
  const addEquipo = (equipo) => {
    const options = {
      body: equipo,
    };
    API.post("equipos", options).then((response) => {
      if (!response.error) setEquipos([...equipos, equipo]);
    });
  };

  //EDITAR UN EQUIPO
  const editEquipo = (equipo) => {
    const options = {
      body: equipo,
    };
    API.put("equipos", options, equipo.id).then((response) => {
      if (!response.error) {
        const newEquipos = equipos.map((el) =>
          el.id === equipo.id ? equipo : el
        );
        setEquipos(newEquipos);
        setEditData(null);
      }
    });
  };

  //ELIMINAR UN EQUIPO
  const deleteEquipo = (id) => {
    const isDelete = window.confirm(
      `¿Deseas eliminar el registro con el id: ${id}?`
    );

    if (isDelete) {
      API.del("equipos", id).then((response) => {
        if (!response.error) {
          const newEquipos = equipos.filter((el) => el.id !== id);
          setEquipos(newEquipos);
        }
      });
    }
  };

  return (
    <>
      <h2>CRUD API de equipos</h2>
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

export default CrudAPI;
