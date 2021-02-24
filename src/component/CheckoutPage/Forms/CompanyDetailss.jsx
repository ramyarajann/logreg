import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { InputField, CheckboxField, DatePickerField } from '../../FormFields';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function CompanyDetailss(props) {
  const classes = useStyles();
  const {
    formField: { Companyname, emailid, jobtitle, exp, iaccepttermsandconditions }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Add your Company Details
      </Typography>
      <br></br>
      <List >
        <ListItem>
          <ListItemAvatar className={classes.root}>
            <Avatar className={classes.large}><InsertPhotoIcon /></Avatar>
          </ListItemAvatar>
          <ListItemText style={{ color: "orange" }} primary="Upload Your Company Logo" />
        </ListItem>
      </List>
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
