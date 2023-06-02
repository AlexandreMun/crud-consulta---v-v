import React, { useState } from "react";
import FormDialogEdit from "./dialog/dialogEdit";
import FormDialogDelete from "./dialog/dialogDelete";
import Axios from "axios";

export default function Infos(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleClickEdit = () => {
    setOpenEdit(true);
  };

  const handleClickDelete = () => {
    setOpenDelete(true);
  };

  return (
    <>
      <FormDialogEdit
        open={openEdit}
        setOpen={setOpenEdit}
        idconsulta={props.idconsulta}
        title={props.title}
        patient={props.patient}
        doctor={props.doctor}
        date={props.date}
        listAppointment={props.listAppointment}
        setlistAppointment={props.setlistAppointment}
      />

      <FormDialogDelete
        open={openDelete}
        setOpen={setOpenDelete}
        idconsulta={props.idconsulta}
        title={props.title}
        patient={props.patient}
        doctor={props.doctor}
        date={props.date}
        listAppointment={props.listAppointment}
        setlistAppointment={props.setlistAppointment}
      />

      <tr>
        <td>{props.title}</td>
        <td>{props.patient}</td>
        <td>{props.doctor}</td>
        <td>{props.date}</td>
        <td>
          <button className="btn edit" onClick={() => handleClickEdit()}>
            Editar
          </button>
        </td>
        <td>
          <button className="btn delete" onClick={() => handleClickDelete()}>
            Excluir
          </button>
        </td>
      </tr>
    </>
  );
}
