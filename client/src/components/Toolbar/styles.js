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
  reportFormDialog: {
    marginBottom: theme.spacing(2),
  },
  createBtn: {
    backgroundColor: '#0067D4',
    marginRight: theme.spacing(3),
  },
  linkStyle: {
    textDecoration: 'none',
  },
  smallerWidth: {
    width: '6rem',
  },
  largerWidth: {
    minWidth: '10rem',
  },
  titleMargin: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    margin: theme.spacing(2),
  },
  inputMargin: {
    margin: theme.spacing(2),
  },
  buttonMargin: {
    marginBottom: theme.spacing(1),
  },
  toolbarMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    alignItems: 'flex-end',
    justify: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
  },
  driverSelection: {
    minWidth: '10rem',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(2),
    },
  },
  topMargin: { marginTop: theme.spacing(2) },
  rightMargin: { marginRight: theme.spacing(1) },
  leftMargin: { marginLeft: theme.spacing(2) },
  moreRightMargin: { marginRight: theme.spacing(3) },
  show: {
    visibility: 'visible',
  },
  hide: {
    visibility: 'hidden',
  },
});

export default styles;
