import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  
  stepper: {
    padding: theme.spacing(3, 0, 5),
    width: '100%',
    background: '#2E4B64',
    padding: '20px 20%',
  },
  buttons: {
   // display: 'flex',
  //  justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));
