import React from 'react';
import { Container, Grid, Typography, } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

const genders = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'Male'
  },
  {
    value: '2',
    label: 'Female'
  },
  {
    value: '3',
    label: 'Other'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'TamilNadu'
  },
  {
    value: '22',
    label: 'TamilNadu'
  },
  {
    value: '33',
    label: 'TamilNadu'
  }
];

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: '111',
    label: 'India'
  },
  {
    value: '222',
    label: 'India'
  },
  {
    value: '333',
    label: 'India'
  }
];

export default function PersonalDetailss(props) {
  const {
    formField: {
      fullName,
      gender,
      country,
      state,
      phoneno,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Add Your Personal Details
       </Typography>
      <br></br>
      <Typography variant="subtitle2" gutterBottom align="left">
        Full Name
       </Typography>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <InputField name={fullName.name} label={fullName.label} fullWidth variant="outlined" size="small" />
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="subtitle2" gutterBottom align="left">
        Gender
       </Typography>
      <Grid container xs={12}>
        <Grid item xs={12}>
          {/* <InputField name={gender.name} label={gender.label} variant="outlined" size="small" /> */}
          <SelectField fullWidth variant="outlined" size="small"
            name={gender.name}
            label={gender.label}
            data={genders}
            fullWidth
          />
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="subtitle2" gutterBottom align="left">
        Country
       </Typography>
      <Grid container xs={12}>
      <Grid item xs={12} >
          <SelectField fullWidth variant="outlined" size="small"
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="subtitle2" gutterBottom align="left">
        State
       </Typography>
      <Grid container xs={12}>
      <Grid item xs={12}>
          <SelectField fullWidth variant="outlined" size="small"
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="subtitle2" gutterBottom align="left">
        Phone No
       </Typography>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <InputField name={phoneno.name} label={phoneno.label} fullWidth variant="outlined" size="small" />
        </Grid>
      </Grid>

    </React.Fragment>
  );
}
