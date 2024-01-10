import { Box, Button, TextField, Typography } from "@mui/material"
import BreadCrumb from "../components/BreadCrumb"
import { Padding } from "@mui/icons-material"

const Contact = () => {
  return (
    <Box component={"form"} action="mailto:k2patel4947@gmail.com">
        <Box>
            <BreadCrumb text="Contact Us" />
        </Box>
        <Box py="70px">
            <Box maxWidth={"1150px"} mx="auto" height={"500px"}>
                <Typography variant="h4" sx={{fontWeight : "bold" , mb : "1rem"}}>
                    Get in touch
                </Typography>
                <textarea style={{
                    border : "solid gray 1px" ,
                    padding : "1rem" ,
                    color : "lightgray" ,
                }} cols="90" rows="10"  placeholder="Enter message"></textarea>

                <Box display = "flex" m="1rem 0 0 0 ">
                    <TextField label="Enter your name"  sx={{
                        width:"21rem" ,  mb : "" , mr:"1rem"
                    }}></TextField>

                    <TextField label="Enter your email" sx={{
                        width:"21rem" , mb : "" , ml:"1rem"
                    }}></TextField>
                </Box>
                
                <TextField label="Enter Subject" sx={{
                    display : " " , mb : "" , width  :"44rem" , m : "1rem 0 0 0"
                }}></TextField>

                <Box m="1rem 0 0 0">
                    <Button variant="contained" type="submit" sx={{bgcolor: "#71ca00"}}>
                        Send Message
                    </Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Contact