import React from 'react';
import moment from 'moment';
import { Typography, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';


function Review1(props) {
  const { formValues } = props;
  const classes = useStyles();
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        <Grid container xs={12} spacing={1} style={{marginRight: "20px",marginLeft: "80px"}}>
        <Grid item xs={3}>
        <TextField
          id="outlined"
         variant="outlined"
        />
        </Grid>
        <Grid item xs={3}>
        <TextField
          id="outlined"
         variant="outlined"
        />
        </Grid>
        <Grid item xs={3}>
        <TextField
          id="outlined"
         variant="outlined"
        />
        </Grid>
        <Grid item xs={3}>
        <TextField
          id="outlined"
         variant="outlined"
        />
        </Grid>
      </Grid>
      </Typography>
      </Grid>
  );
}

export default Review1;
