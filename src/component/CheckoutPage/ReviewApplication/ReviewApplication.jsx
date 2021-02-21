import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';
import Review2 from './Review2';
import Review3 from './Review3';
import Review1 from './Review1';

export default function ReviewApplication() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Enter Your OTP
      </Typography>
      <Typography variant="h15" gutterBottom align="left">
        For Your Security, We need to verify Your Identity.,{'\n'} 
        Please Enter the 5 digit Code sent to abc@gmail.com. Please Enter Below
      </Typography>
      <Review2 />
      <Grid container spacing={2}>
        <Review1 formValues={formValues} />
        <Review3 formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
