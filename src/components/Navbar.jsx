import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Badge, IconButton } from '@mui/material';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi';

let linkStyle = {
  textDecoration: 'none',
  fontFamily: "'Heebo', sans-serif",
  textTransform: 'uppercase',
  color: '#2a2a2a',
  fontSize: '13px',
  fontWeight: '400',
};

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const handleLogOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }} elevation={1}>
        <Toolbar sx={{ px: { xs: '140px' }, py: { xs: '20px' } }}>
          <Box sx={{ flexGrow: 1 }}>
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
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
              display: 'flex',
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
