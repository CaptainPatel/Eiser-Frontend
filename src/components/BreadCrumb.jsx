import { Box, Typography } from "@mui/material";
import React from "react";

const BreadCrumb = ({text}) => {
  return (
    <Box py={"70px"} bgcolor={"#f6f6f6"}>
      <Box
        maxWidth={"1000px"}
        mx={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Heebo', sans-serif",
              fontSize: "27px",
              fontWeight: "500",
              color: "#2a2a2a",
              mb: "8px",
              lineHeight: "32.4px",
            }}
          >
            {text}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "14px",
              fontWeight: "300",
              color: "#797979",
              lineHeight: "24px",
            }}
          >
            Checkout your favourite products here
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "14px",
              fontWeight: "300",
              color: "#797979",
              lineHeight: "24px",
            }}
          >
            Home / {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BreadCrumb;
