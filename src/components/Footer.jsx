import React from 'react';
import { Box, Button, ButtonGroup, Link, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box minWidth={"100%"} minHeight={"40vh"} bgcolor="#0d0d1f" px={{ xs: '2rem', md: '12rem' }} py="5rem" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography variant="body1" style={{ color: "white", width: '100%', textAlign: 'center', marginBottom: '1rem' }}>
        Copyright ©2023 All rights reserved | This template is made with ❤️ by Captain
      </Typography>
      <ButtonGroup variant="outlined" aria-label="outlined button group" style={{ marginBottom: '2rem' }}>
        <Button> <GitHubIcon sx={{ color: "white" }} /> </Button>
        <Button> <TwitterIcon sx={{ color: "white" }} /> </Button>
        <Button> <InstagramIcon sx={{ color: "white" }} /> </Button>
        <Button> <FacebookIcon sx={{ color: "white" }} /> </Button>
      </ButtonGroup>
    </Box>
  )
}

export default Footer;
