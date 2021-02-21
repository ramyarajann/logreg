import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField,DatePickerField } from '../../FormFields';

export default function CompanyDetailss(props) {
  const {
    formField: { Companyname, emailid, jobtitle, exp, iaccepttermsandconditions}
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Add your Company Details
      </Typography>
      <br></br>
      <Typography variant="subtitle2" gutterBottom align="left">
        Company Name
       </Typography>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <InputField name={Companyname.name} label={Companyname.label} fullWidth variant="outlined" size="small" />
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="subtitle2" gutterBottom align="left">
        Email Id
       </Typography>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <InputField name={emailid.name} label={emailid.label} fullWidth variant="outlined" size="small" />
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="subtitle2" gutterBottom align="left">
        Job Title
       </Typography>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <InputField name={jobtitle.name} label={jobtitle.label} fullWidth variant="outlined" size="small" />
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="subtitle2" gutterBottom align="left">
        Year Of Experience
       </Typography>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <InputField name={exp.name} label={exp.label} fullWidth variant="outlined" size="small" />
        </Grid>
      </Grid>
      <br></br>
      <Grid item xs={12}>
          <CheckboxField
            name={iaccepttermsandconditions.name}
            label={iaccepttermsandconditions.label}
          />
        </Grid>
    </React.Fragment>
  );
}
