import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  
];

function Review2() {
  const classes = useStyles();
  return (
    
      <ListItem className={classes.listItem}>
       
      </ListItem>
   
  );
}

export default Review2;
