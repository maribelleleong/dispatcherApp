// Material UI styles for Toolbar Display

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  formPaper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
  buttonMargin: {
    marginBottom: theme.spacing(1),
  },
  toolbarMargin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  addMargin: { marginRight: theme.spacing(1) },
  show: {
    visibility: 'visible',
  },
  hide: {
    visibility: 'hidden',
  },
});

export default styles;
