import React from 'react';
import { Box, Button, ButtonGroup, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box minWidth={"100%"} minHeight={"40vh"} bgcolor="#0d0d1f" px={{ xs: '2rem', md: '8rem' }} py="5rem" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box id="footer" color={"white"} display={{ xs: 'none', md: 'flex' }} gap={8}>
        <div style={{ padding: '1rem' }}>
          <Typography variant="h6">Top Products</Typography>
          <Typography color={"gray"} variant={"body2"}>
            Lorem <br />
            Ipsum <br />
            Luffy <br />
            Zoro <br />
          </Typography>
        </div>
        <div style={{ padding: '1rem' }}>
          <Typography variant="h6">Quick Links</Typography>
          <Typography color={"gray"} variant={"body2"}>
            Lorem <br />
            Ipsum <br />
            Luffy <br />
            Zoro <br />
          </Typography>
        </div>
        <div style={{ padding: '1rem' }}>
          <Typography variant="h6">Resources</Typography>
          <Typography color={"gray"} variant={"body2"}>
            Lorem <br />
            Ipsum <br />
            Luffy <br />
            Zoro <br />
          </Typography>
        </div>
        <div style={{ padding: '1rem' }}>
          <Typography variant="h6">Features</Typography>
          <Typography color={"gray"} variant={"body2"}>
            Lorem <br />
            Ipsum <br />
            Luffy <br />
            Zoro <br />
          </Typography>
        </div>
        <div style={{ padding: '1rem' }}>
          <Typography variant="h6">Quick Links</Typography>
          <Typography color={"gray"} variant={"body2"}>
            You can trust us. we only send promo offers,
          </Typography>
          <Box>
            <OutlinedInput
              id="outlined-adornment-weight"
              style={{ marginTop: "1rem", backgroundColor: "#313140", color: "white" }}
              endAdornment={<InputAdornment position="end">
                <Button color="success" variant="contained">Subscribe</Button>
              </InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              placeholder='Your Email Address'
              inputProps={{
                'aria-label': 'Newsletter Signup',
              }}
              classes={{ focused: 'input-focused' }}
            />
          </Box>
        </div>
        {/* Add more blocks as needed */}
      </Box>
      <Box id="footer-bottom" display="flex" marginTop={"4rem"} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={{ xs: 'center', md: 'space-between' }} width="100%" >
        {/* Typography */}
        <div style={{ flex: 1 }}>
          <Typography variant="body1" style={{ color: "white", width: '100%', textAlign: 'center', marginBottom: '1rem' }}>
            Copyright ©2023 All rights reserved | This template is made with ❤️ by <span style={{ color: '#71cd14' }}>Captain</span>
          </Typography>
        </div>

        {/* ButtonGroup */}
        <Box id="b-box" alignSelf={"center"} paddingRight={{ md: "5rem" }}>
          <ButtonGroup variant="outlined" aria-label="outlined button group" style={{ marginBottom: '2rem' }}>
            <Button> <GitHubIcon sx={{ color: "white" }} /> </Button>
            <Button> <TwitterIcon sx={{ color: "white" }} /> </Button>
            <Button> <InstagramIcon sx={{ color: "white" }} /> </Button>
            <Button> <FacebookIcon sx={{ color: "white" }} /> </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer;
