import { Box, Typography } from '@mui/material'
import React from 'react'

const FeatureCard = ({ head, subHead, icon }) => {
    return (
        <Box height={"10rem"} width={{ xs: "80%", md: "54%", lg: "22%" }} display="flex" flexDirection={"column"} border="solid 1px" borderColor={"gray"} justifyContent={"center"} alignItems={"center"} >
            {icon}
            <Typography mt={"1rem"}>
                {head}
            </Typography>
            <Typography color="gray" fontSize={13}>
                {subHead}
            </Typography>
        </Box>
    )
}

export default FeatureCard