import './Login.css';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function SaveUser() {
  const navigate = useNavigate();

  const onSave = () => {
    Axios.post('http://localhost:3001/create-user', {
      login: 'a',
      password: 'b'
    }).then(() => navigate('/'));
  };

  return (
    <Box className='page'>
      <Box className='card'>
        <Typography variant='h4'>
          Crie sua conta
        </Typography>
        <TextField
          className='field'
          label='Email'
          variant='filled'
        />
        <TextField
          className='field'
          label='Senha'
          type='password'
          variant='filled'
        />
        <TextField
          className='field'
          label='Repita sua senha'
          type='password'
          variant='filled'
        />
        <Button className='field' onClick={onSave}>Criar</Button>
      </Box>
    </Box>
  );
}