import { Box, Button, Typography } from "@mui/material";

const Banner2 = () => {
    return (
        <Box
            sx={{
                position: "relative",
                right: "10%",
                minHeight: "550px",
                backgroundImage: `url(https://themewagon.github.io/eiser/img/offer-bg.png)`,
                width: "110%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center content horizontally
            }}
        >
            <Box
                sx={{
                    maxWidth: "100%",
                    mx: "auto",
                    display: "flex",
                    alignItems: "center", // Center content vertically
                    translate: { xs: "-30px", md: "15rem" }, // Hide on mobile by default
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        mx: "auto", // Center content horizontally
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: "'Heebo', sans-serif",
                            fontSize: "18px",
                            fontWeight: "300",
                            color: "black",
                        }}
                    >
                        All Men's Collection
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "52px",
                            color: "black",
                            fontWeight: "900",
                            mb: "15px",
                        }}
                    >
                        50% OFF
                    </Typography>
                    <Button
                        sx={{
                            mt: "40px",
                            bgcolor: "#71cd14",
                            lineHeight: "44px",
                            paddingInline: "32px",
                            "&:hover": {
                                bgcolor: "#559712",
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

export default Banner2;
