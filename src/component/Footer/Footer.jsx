import React from 'react';
import { Link, Typography } from '@material-ui/core/';
export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Already have an account ?
      <Link color="inherit" href="https://squashapps.com/">
        Log in 
      </Link>
    </Typography>
  );
}