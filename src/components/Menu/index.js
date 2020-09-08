import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/category/politica">Politica</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/category/internacionales">Internacionales</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/category/tecnologia">Tecnologia</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/category/espectaculos">Espectaculos</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/category/deportes">Deportes</Link></MenuItem>
      </Menu>
    </div>
  );
}
