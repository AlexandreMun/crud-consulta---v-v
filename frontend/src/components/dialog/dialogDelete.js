import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {

  const handleDeleteValues = () => {
    Axios.delete(
      `http://localhost:3001/delete-appointment/${props.idconsulta}`
    ).then(() => {
      document.location.reload();
    })
    handleClose()
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Deseja Excluir?</DialogTitle>

        <DialogTitle>
          Titulo: {props.title}
        </DialogTitle>

          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancelar</Button>
            <Button onClick={handleDeleteValues} color="primary">Excluir</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}
