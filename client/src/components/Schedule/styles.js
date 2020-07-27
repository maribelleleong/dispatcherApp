const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  cardPaper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
  formPaper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
});

export default styles;
