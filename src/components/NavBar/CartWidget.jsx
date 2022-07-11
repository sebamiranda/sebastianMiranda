//ts@check
import React from 'react';
import IconButton from '@mui/material/IconButton';
import './CartWidget.css';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { myContext } from '../../CartContext/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function CartWidget() {

  const { totalProductosCart,cart } = useContext(myContext); 

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
    <Link style={{textDecoration:"none", color:"success"}} to={'/cart'}> 
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={totalProductosCart(cart)} >
                <ShoppingCartIcon />
              </StyledBadge>
          </IconButton>
     </Link>         
    </div>





  )
}
