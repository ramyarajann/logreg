import React from 'react';
import moment from 'moment';
import { Typography, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';
import OtpInput from "react-otp-input";


function Review1(props) {
  const { formValues } = props;
  const classes = useStyles();
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        <Grid container xs={12} spacing={1} style={{marginRight: "20px",marginLeft: "80px"}}>
        <OtpInput 
          onChange={otp => console.log(otp)}
          numInputs={5}
          shouldAutoFocus
          OTPLength={4}
          inputStyle={{  
            width: '3rem',  
            height: '3rem',  
            margin: '20px 1rem',  
            fontSize: '2rem',  
            borderRadius: 4,  
            border: '2px solid rgba(0,0,0,0.3)',  
          }}  
        />
      </Grid>
      </Typography>
      </Grid>
  );
}

export default Review1;
