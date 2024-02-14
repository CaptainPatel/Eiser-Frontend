import { Box, Divider, Typography } from "@mui/material"

const CategoryBox = ({ array }) => {
    return (
        <Box p="2rem" m={{ xs: "0 0.5rem 0 0", md: "4.5rem 0 0 8rem" }} sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", border: "1px solid black" }} >
            <Typography variant="h6" align="center" color="#1a3e75">
                Browse Categories
            </Typography>

            {/* Divider */}
            <Divider sx={{ width: "100%", height: "0.2rem", bgcolor: "#71cd14", m: "1rem 1rem 0 0" }} ></Divider>

            {/* List of items to include */}
            <Box>
                {array?.map((item) =>
                    <Typography p="1rem 0.5rem 0 0.5rem">
                        {item}
                    </Typography>
                )}
            </Box>
        </Box>
    )
}

export default CategoryBox