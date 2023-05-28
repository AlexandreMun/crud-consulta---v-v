import './Login.css';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import Alert from './components/Alert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onLogin = () => {
    if (!login)
      setError('Email é obrigatório');
    else if(!login.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/))
      setError('Email inválido');
    else if (!password)
      setError('Senha é obrigatório');
    else if (password.length < 8)
      setError('A senha precisa ter pelo menos oito caracteres');
    else if (!password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/[0-9]/))
      setError('A senha precisa ter uma letra maiúscula, minúscula e um número');
    else
      Axios.post('http://localhost:3001/login', {
        login,
        password
      })
        .then(() => navigate('/consultas'))
        .catch(() => setError('Falha na autenticação'));
  };

  return (
    <Box className='page'>
      <Alert error={error} setError={setError} />
      <Box className='card'>
        <Typography variant='h4'>
          Clínica Universit
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
        <Button className='field' onClick={onLogin}>Entrar</Button>
        <Typography variant='caption'>
          Não possui conta? clique em
          <a href='cadastre-se'> cadastrar</a>
        </Typography>
      </Box>
    </Box>
  );
}