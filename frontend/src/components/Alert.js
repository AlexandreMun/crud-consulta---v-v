import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

export default function Alert({ error, setError }) {
  return (
    <>
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
    </>
  );
}