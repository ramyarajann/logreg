import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for Applying SquashApps
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #1000000. We have emailed your confirmation,
        and will send you an update when your Application matches the Requirement.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
