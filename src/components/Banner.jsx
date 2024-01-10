import { Box, Button, Typography } from "@mui/material";
import banner from "../assets/banner.webp";

const Banner = () => {
  return (
    <Box
      sx={{
        minHeight: "650px",
        backgroundImage: `url(${banner})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "1200px",
          mx: "auto",
          display: "flex",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "14px",
              color: "white",
              mb: "10px",
            }}
          >
            MEN COLLECTION
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "52px",
              color: "white",
              fontWeight: "700",
              mb: "15px",
            }}
          >
            {" "}
            <span
              style={{
                color: "#71cd14",
              }}
            >
              Show
            </span>{" "}
            Your <br /> Personal{" "}
            <span
              style={{
                color: "#71cd14",
              }}
            >
              Style
            </span>{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Heebo', sans-serif",
              fontSize: "18px",
              fontWeight: "300",
              color: "#fff",
            }}
          >
            Setting sail as the fashion king of pirates, where style knows no bounds..
          </Typography>
          <Button
            sx={{
              mt: "40px",
              bgcolor: "#71cd14",
              lineHeight: "44px",
              paddingInline: "32px",
              "&:hover": {
                bgcolor : "#559712"
              },
            }}
            variant="contained"
          >
            VIEW COLLECTION
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
