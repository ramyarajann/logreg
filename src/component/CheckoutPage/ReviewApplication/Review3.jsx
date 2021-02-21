import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function Review3(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { fullName,  address1 } = formValues;
  return (
    <Grid item xs={12} sm={6}>
    
    </Grid>
  );
}

export default Review3;
