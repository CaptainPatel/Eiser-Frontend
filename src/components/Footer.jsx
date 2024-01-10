import { Box, Button, ButtonGroup, Grid, Link, TextField, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box minWidth={"100%"} minHeight={"40vh"} bgcolor="#0d0d1f" px="12rem" py="5rem" display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid container >
            <Grid >
                <table cellSpacing={"40rem"} >
                  <thead>
                    <tr style={{color: "white"}} className='footer-text'>
                      <td>Top Products</td>
                      <td>Quick Links</td>
                      <td>Features</td>
                      <td>Resources</td>
                      <td>News Letter</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{color: "white"}} className='footer-text'>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}}  >Managed Website</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}}  >Design</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}}  >Analysis</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}}  >Research Work</Link> </td>
                      <td >
                        <Typography>You can trust us. we only send promo offers,</Typography>
                      </td>
                    </tr>
                    <tr style={{color: "white"}} className='footer-text'>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Manage Reputation</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Centralize</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Roronoa Zoro</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Cuztomization</Link> </td>
                      <td colSpan={2} rowSpan={2} >
                        <Box component={"form"} action="mailto:k2patel4947@gmail.com">
                          <TextField type={"email"} sx={{bgcolor:"#30303f" , color:"white" , width:"17rem"}} label="Enter Your Email" ></TextField>
                          <Button type={"submit"} variant="contained" sx={{bgcolor:"#70cb13", position:"relative" , right:"3.5rem" , top:"0.6rem" ,  width : "7rem" , borderRadius:0 , zIndex:2}}>Submit</Button>
                        </Box>
                      </td>
                    </tr>
                    <tr style={{color: "white"}} className='footer-text'>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Power Tools</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Heavy Duty</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Operate</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Advertisements</Link> </td>
                    </tr>
                    <tr style={{color: "white"}} className='footer-text'>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Marketing Service</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Reincarnate</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Assesment</Link> </td>
                      <td><Link sx={{color: "gray", textDecoration: "none" , fontSize:"0.9rem"}} >Glorification</Link> </td>
                    </tr>
                    <tr>
                      <td colSpan={4} style={{color:"white"}}>Copyright ©2023 All rights reserved | This template is made with ♥️ by Captain</td>
                      <td colSpan={3} style={{display:"flex" ,  justifyContent:"center"}}> 
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                          <Button> <GitHubIcon sx={{color:"white" }}  /> </Button>
                          <Button> <TwitterIcon  sx={{color:"white" }}  /> </Button>
                          <Button> <InstagramIcon  sx={{color:"white" }}  /> </Button>
                          <Button> <FacebookIcon sx={{color:"white" }}  /> </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer