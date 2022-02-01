import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CustomizedBadges = () => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={4} color="secondary" anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CustomizedBadges