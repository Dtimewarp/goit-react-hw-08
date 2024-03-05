import { Typography } from '@mui/material';
import css from './BlockHeader.module.css';

export default function BlockHeader({ children }) {
  return (
    <div className={css.header}>
      <Typography variant="body" fontSize={36} gutterBottom>
        {children}
      </Typography>
    </div>
  );
}
