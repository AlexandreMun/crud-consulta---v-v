import './Login.css';
import { Box, Button, TextField, Typography } from '@material-ui/core';

export default function SaveUser() {
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
        <Button className='field'>Criar</Button>
      </Box>
    </Box>
  );
}