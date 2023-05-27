import React, { useState } from "react";
import FormDialogEdit from "./dialog/dialogEdit";
import Axios from "axios";

export default function Infos(props) {
  const [open, setOpen] = useState(false);

  const handleClickEdit = () => {
    setOpen(true);
  };

  const handleDeleteAppointment = () => {
    Axios.delete(
      `http://localhost:3001/delete-appointment/${props.idconsulta}`
    ).then(() => {
      document.location.reload();
    });
  };

  return (
    <>
      <FormDialogEdit
        open={open}
        setOpen={setOpen}
        idconsulta={props.idconsulta}
        title={props.title}
        patient={props.patient}
        doctor={props.doctor}
        date={props.date}
        listAppointment={props.listAppointment}
        setlistAppointment={props.setlistAppointment}
      />
      <tr>
        {/* <td>{props.idconsulta}</td> */}
        <td>{props.title}</td>
        <td>{props.patient}</td>
        <td>{props.doctor}</td>
        <td>{props.date}</td>
        <td>
          <button className="btn edit" onClick={() => handleClickEdit()}>Editar</button>
        </td>
        <td>
          <button className="btn delete" onClick={handleDeleteAppointment}>Excluir</button>
        </td>
      </tr>
    </>
  );
}
