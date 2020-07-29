// Material UI styles for Schedule Display

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    fontSize: '0.2rem',
    padding: theme.spacing(0.4),
    '@media (min-width:600px)': {
      fontSize: '1rem',
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
      padding: theme.spacing(1.5),
    },
  },
  cardPaper: {
    textAlign: 'center',
    position: 'relative',
    fontSize: '0.2rem',
    padding: theme.spacing(0.4),
    '@media (min-width:600px)': {
      fontSize: '1rem',
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  },
  formPaper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  smallerText: {
    fontSize: '0.2rem',
    padding: theme.spacing(0.4),
    '@media (min-width:600px)': {
      fontSize: '0.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.7rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
    },
  },
  blue: {
    backgroundColor: '#CCF0F8',
  },
  yellow: {
    background: '#FDF57B',
  },
  purple: {
    background: '#D8ADFA',
  },
  smallerWidth: {
    width: '6rem',
  },
  largerWidth: {
    minWidth: '10rem',
  },
  titleMargin: {
    margin: theme.spacing(2, 2),
  },
  inputMargin: {
    margin: theme.spacing(2),
  },

  gridContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: 'repeat(25, 1fr)',
    gridGap: '0.3rem',
  },
});

export default styles;
