//ts@check
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { ShoppingCartRounded } from '@mui/icons-material';
import './CartWidget.css';

export default function CartWidget({cantidad}) {
    
  return (
    <div>
        <IconButton color="inherit" >
            <ShoppingCartRounded></ShoppingCartRounded>
             {cantidad}
        </IconButton>
        
    </div>
  )
}
