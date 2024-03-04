import { Box, Typography } from '@mui/material';

const styles = {
  container: {
    paddingTop: '185px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    maxWidth: '1060px',
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  titleSpan: {
    color: 'rgb(51, 153, 255)',
  },
};

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: '42px', textAlign: 'center', fontWeight: 500 }}
            gutterBottom
          >
            <span style={styles.titleSpan}>
            Do not lose contact with those who are very important to you!
            </span>
            <br />
            <span>
              Keep your contacts here:)
            </span>
          </Typography>
        </Box>
      </div>
    </>
  );
}
