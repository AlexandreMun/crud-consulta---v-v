import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    idconsulta: props.idconsulta,
    title: props.title,
    patient: props.title,
    doctor: props.doctor,
    date: props.date
  })

  const handleEditValues = () => {
    Axios.put("http://localhost:3001/edit-appointment",  {
      idconsulta: editValues.idconsulta,
      title: editValues.title,
      patient: editValues.patient,
      doctor: editValues.doctor,
      date: editValues.date
    })
    handleClose()
  }

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = value => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.idconsulta} - Editar</DialogTitle>

        <DialogContent>
          <TextField autoFocus margin="dense" id="title" label="Titulo da consulta" defaultValue={props.title} onChange={handleChangeValues} type="text" fullWidth/>
          <TextField autoFocus margin="dense" id="patient" label="Paciente" defaultValue={props.patient} onChange={handleChangeValues}  type="text" fullWidth/>
          <TextField autoFocus margin="dense" id="doctor" label="Médico" defaultValue={props.doctor} onChange={handleChangeValues}  type="text" fullWidth/>
          <TextField autoFocus margin="dense" id="date" label="Data da consulta" defaultValue={props.date} onChange={handleChangeValues} type="date" fullWidth/>
        </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancelar</Button>
            <Button onClick={handleEditValues} color="primary">Salvar</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}
