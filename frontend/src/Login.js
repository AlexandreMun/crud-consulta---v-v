import './Login.css';
import { Box, Button, TextField, Typography } from '@material-ui/core';

export default function Login() {
  return (
    <Box className='page'>
      <Box className='card'>
        <Typography variant='h4'>
          Clínica Universit
        </Typography>
        <TextField
          className='field'
          label='Email'
          variant='filled'
        />
        <TextField
          className='field'
          label='Senha'
          variant='filled'
        />
        <Button className='field'>Entrar</Button>
        <Typography variant='caption'>
          Não possui conta? clique em
          <a href='cadastre-se'> cadastrar</a>
        </Typography>
      </Box>
    </Box>
  );
}