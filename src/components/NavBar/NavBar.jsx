import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Home, ShoppingCartRounded } from '@mui/icons-material';

export default function ButtonAppBar() {
  return (
    
      <AppBar position="fixed" sx={{ bgcolor: "green" }}>
        <Toolbar>
        <IconButton color="inherit">
            <ShoppingCartRounded></ShoppingCartRounded>
        </IconButton>
        <Button color="inherit">INICIO</Button>
          <Typography  component="div" sx={{ flexGrow: 1 }}>
           PRODUCTOS
          </Typography>          
          <Typography  component="div" sx={{ flexGrow: 1 }}>
            OFERTAS
          </Typography>
          <Typography  component="div" sx={{ flexGrow: 1 }}>
            PEDIDOS
          </Typography>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>
    
  );
}
