//ts@check
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { ShoppingCartRounded } from '@mui/icons-material';
import './CartWidget.css';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget({cantidad}) {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 1,
      // border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 3px',
      background:'#fafafa',
    },
  }));

    
  return (
    <div>
      <IconButton aria-label="cart">
      <StyledBadge badgeContent={cantidad} >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </div>
  )
}
