import './Login.css';
import { Box, Button, Snackbar, TextField, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SaveUser() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSave = () => {
    if (!login)
      setError('Email é obrigatório');
    else if(!login.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/))
      setError('Email inválido');
    else if (!password || !secondPassword)
      setError('É preciso informar uma senha');
    else if (password !== secondPassword)
      setError('As senhas não são iguais');
    else if (password.length < 8)
      setError('A senha precisa ter pelo menos oito caracteres');
    else if (!password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/[0-9]/))
      setError('A senha precisa ter uma letra maiúscula, minúscula e um número');
    else
      Axios.post('http://localhost:3001/create-user', {
        login: login,
        password: secondPassword
      }).then(() => navigate('/'));
  };

  return (
    <Box className='page'>
      {error &&
        <Snackbar
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
          autoHideDuration={2500}
          open={!!error}
          onClose={() => setError('')}
        >
          <MuiAlert severity='error'>{error}</MuiAlert>
        </Snackbar>
      }
      <Box className='card'>
        <Typography variant='h4'>
          Crie sua conta
        </Typography>
        <TextField
          className='field'
          label='Email'
          onChange={(event) => setLogin(event.target.value)}
          variant='filled'
        />
        <TextField
          className='field'
          label='Senha'
          onChange={(event) => setPassword(event.target.value)}
          type='password'
          variant='filled'
        />
        <TextField
          className='field'
          label='Repita sua senha'
          onChange={(event) => setSecondPassword(event.target.value)}
          type='password'
          variant='filled'
        />
        <Button className='field' onClick={onSave}>Criar</Button>
      </Box>
    </Box>
  );
}