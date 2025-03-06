import React, { useEffect, useState } from "react";

const CrudForm = ({ addEquipo, editEquipo, editData }) => {
  useEffect(() => {
    console.log(editData);
  }, [editData]);

  const [formData, setFormData] = useState({
    equipo: "",
    pais: "",
    id: null,
  });

  useEffect(() => {
    if (editData !== null) {
      setFormData(editData);
    } else {
      setFormData({
        equipo: "",
        pais: "",
        id: null,
      });
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.equipo !== "" && formData.pais !== "") {
      if (editData !== null) {
        editEquipo(formData);
      } else {
        formData.id = Date.now();
        addEquipo(formData);
        setFormData({
          equipo: "",
          pais: "",
          id: null,
        });
      }
    } else {
      alert("Por favor agregar un equipo y un pais.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className="m-3" onSubmit={handleSubmit}>
        <label htmlFor="equipo">Equipo:</label>
        <input
          type="text"
          name="equipo"
          onChange={handleChange}
          value={formData.equipo}
        ></input>
        <label htmlFor="pais">Pais:</label>
        <input
          type="text"
          name="pais"
          onChange={handleChange}
          value={formData.pais}
        ></input>
        <input className="btn btn-success mx-1" type="submit" value="Enviar" />
        <input className="btn btn-danger mx-1" type="reset" value="Cancelar" />
      </form>
    </>
  );
};

export default CrudForm;
