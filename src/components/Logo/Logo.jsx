import css from './Logo.module.css';
import { Typography } from '@mui/material';

export default function Logo() {
  return (
    <Typography variant="body1" className={css.logo} fontSize={28}>
      Notebook
    </Typography>
  );
}
