import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Infos from "./components/tableAppointment";
// import FormDialogAdd from "./components/dialog/dialogAdd";

function App() {
  const [values, setValues] = useState();
  const [listAppointments, setlistAppointments] = useState();
  // pega os valores digitados nos inouts
  const handleChangeValues = (value) => {
    // Pega os valores armazenados com o setValues e adiciona em um objeto
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickAdd = () => {
    // Usa axios para enviar os valores para o servidor
    Axios.post("http://localhost:3001/create-appointment", {
      title: values.title,
      patient: values.patient,
      doctor: values.doctor,
      date: values.date,
    }).then(() => {
      document.location.reload();
    });
  };

  // Usa axios para pegar os dados do servidor
  useEffect(() => {
    Axios.get("http://localhost:3001/appointments").then((response) => {
      setlistAppointments(response.data);
    });
  }, []);

  return (
    <div className="app-container">
      <div className="appointment-container">
        <h1>Consultas</h1>

        <div className="fields-add">
          <input
            type="text"
            name="title"
            placeholder="Titulo da consulta"
            className="title-appointment"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            name="patient"
            placeholder="Paciente"
            className="patient-appointment"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            name="doctor"
            placeholder="Médico"
            className="doctor-appointment"
            onChange={handleChangeValues}
          />
          <input
            type="date"
            name="date"
            placeholder="Data da consulta"
            className="date-appointment"
            onChange={handleChangeValues}
          />

          <button className="btn add" onClick={handleClickAdd}>
            Cadastrar
          </button>
        </div>
      </div>

      <table className="table-app">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Titulo da consulta</th>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Data da consulta</th>
            <th>Editar</th>
            <th>Apagar</th>
          </tr>
        </thead>
        <tbody>
          {typeof listAppointments !== "undefined" &&
            listAppointments.map((value) => {
              return (
                <Infos
                  key={value.idconsulta}
                  listAppointment={listAppointments}
                  setlistAppointment={setlistAppointments}
                  idconsulta={value.idconsulta}
                  title={value.title}
                  patient={value.patient}
                  doctor={value.doctor}
                  date={value.date}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
