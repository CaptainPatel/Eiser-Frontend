import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Badge, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi';

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
    setLoggedIn(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const linkStyle = {
    textDecoration: 'none',
    fontFamily: "'Heebo', sans-serif",
    textTransform: 'uppercase',
    color: '#2a2a2a',
    fontSize: '13px',
    fontWeight: '400',
  };

  const drawerContent = (
    <List>
      <ListItem>
        <Link to={'/'} style={linkStyle}>
          Home
        </Link>
      </ListItem>
      <ListItem>
        <Link to={'/products'} style={linkStyle}>
          Shop
        </Link>
      </ListItem>
      <ListItem>
        <Link to={'/cart'} style={linkStyle}>
          Cart
        </Link>
      </ListItem>
      <ListItem>
        <Link to={'/contact'} style={linkStyle}>
          Contact
        </Link>
      </ListItem>
      {loggedIn ? (
        <ListItem onClick={handleLogOut}>
          Logout
        </ListItem>
      ) : (
        <>
          <ListItem>
            <Link to={'/login'} style={linkStyle}>
              Login
            </Link>
          </ListItem>
          <ListItem>
            <Link to={'/register'} style={linkStyle}>
              Register
            </Link>
          </ListItem>
        </>
      )}

    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }} elevation={1}>
        <Toolbar sx={{ px: { xs: '20px', md: '140px' }, py: '20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: '30px',
              alignItems: 'center',
            }}
          >
            <Link style={linkStyle} to={'/'}>
              Home
            </Link>
            <Link style={linkStyle} to={'/products'}>
              Shop
            </Link>
            <Link style={linkStyle} to={'/cart'}>
              Cart
            </Link>
            <Link style={linkStyle} to={'/contact'}>
              Contact
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: '30px',
              alignItems: 'center',
            }}
          >
            {loggedIn ? (
              <Button color="inherit" onClick={handleLogOut}>
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login" style={linkStyle}>
                  <Button color="inherit">Login</Button>
                </Link>
                <Link to="/register" style={linkStyle}>
                  <Button color="inherit">Register</Button>
                </Link>
              </>
            )}
            <IconButton color="inherit">
              <Link to="/cart">
                <Badge
                  color="primary"
                  badgeContent={0}
                  sx={{
                    color: '#71cd14',
                  }}
                >
                  <HiShoppingCart
                    style={{
                      color: '#71cd14',
                    }}
                  />
                </Badge>
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
