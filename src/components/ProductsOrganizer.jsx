import { Box, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const ProductsOrganizer = () => {
    const [sorting, setSorting] = useState("Default");
    const [show, setShow] = useState("Default");

    const handleSortingChange = (e) => {
        setSorting(e.target.value);
    };

    const handleShowChange = (e) => {
        setShow(e.target.value);
    };

    return (
        <Box display={"flex"} width={"100%"} mx="2rem" bgcolor={"#f6f6f6"} alignSelf={"center"} p={"1rem"}>
            <Select value={sorting} onChange={handleSortingChange} displayEmpty sx={{ mr: 2, bgcolor: "white", px: "2rem" }} >
                <MenuItem value="Default">
                    <em>Default Sorting</em>
                </MenuItem>
                <MenuItem value={"Ascending"}>Ascending</MenuItem>
                <MenuItem value={"Descending"}>Descending</MenuItem>
            </Select>
            <Select value={show} onChange={handleShowChange} displayEmpty sx={{ bgcolor: "white", px: "2rem" }}>
                <MenuItem value="Default">
                    <em>Show 6</em>
                </MenuItem>
                <MenuItem value={"Show 9"}>Show 9</MenuItem>
                <MenuItem value={"Show 12"}>Show 12</MenuItem>
                <MenuItem value={"Show 15"}>Show 15</MenuItem>
            </Select>
        </Box>
    );
};

export default ProductsOrganizer;
