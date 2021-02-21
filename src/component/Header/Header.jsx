import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar jusposition="absolute" color="default" className={classes.appBar}>
      {/* <Toolbar align="center">
        <Typography variant="h6" color="inherit">
          Squash Apps
        </Typography>
      </Toolbar> */}
    </AppBar>
  );
}