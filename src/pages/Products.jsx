import { Box, Typography } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import { ScaleLoader } from "react-spinners";
import { AiFillWarning } from "react-icons/ai";
import ProductsOrganizer from "../components/ProductsOrganizer";
import CategoryBox from "../components/CategoryBox";
import { useState } from "react";

const Products = ({ products, loading, error }) => {
  const [showCount, setShowCount] = useState(6); // Default show count
  const [sorting, setSorting] = useState("Default"); // Default sorting option
  const [selectedCategory, setSelectedCategory] = useState(null); // Selected category state

  const handleShowChange = (selectedShow) => {
    if (selectedShow === "Default") {
      setShowCount(6);
    } else {
      const count = parseInt(selectedShow.split(" ")[1]);
      setShowCount(count);
    }
  };

  const handleSortingChange = (selectedSorting) => {
    setSorting(selectedSorting);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const sortedProducts = () => {
    let sorted = [...products];

    switch (sorting) {
      case "Ascending":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "Descending":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    // Filter products based on the selected category
    return sorted.filter((product) => {
      if (selectedCategory === "ALL") {
        return true; // Show all products if "ALL" category is selected
      } else {
        return !selectedCategory || product.category === selectedCategory;
      }
    });
  };

  return (
    <Box>
      <Box>
        <BreadCrumb text={"Shop"} />
      </Box>
      <Box display="flex">
        {/* Category Box */}
        <Box>
          <CategoryBox
            categories={["electronics", "Men's clothing", "jewelery", "women's clothing"]}
            onSelectCategory={handleCategorySelect}
          />
        </Box>

        {/* Products Section */}
        <Box flex="1" py="80px">
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <ProductsOrganizer onShowChange={handleShowChange} onSortingChange={handleSortingChange} />
          </Box>
          <Box maxWidth={"1000px"} mx={{ xs: "auto", md: "2rem" }} minHeight={"500px"}>
            {loading ? (
              <Box
                height="50vh"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ScaleLoader color="#71cd14" height={50} width={10} />
              </Box>
            ) : error ? (
              <Box
                height="50vh"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box textAlign={"center"}>
                  <AiFillWarning
                    style={{
                      fontSize: "50px",
                      color: "red",
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "22px",
                      fontWeight: "500",
                      fontFamily: "'Roboto',san-serif",
                    }}
                  >
                    Error : {error}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
                  gap: "20px",
                  mt: "50px",
                  "@media (max-width: 600px)": {
                    gridTemplateColumns: "repeat(2, 1fr)", // Two products in a row on small screens
                  },
                }}
              >
                {/* Only display limited number of products */}
                {sortedProducts()?.slice(0, showCount).map((product) => (
                  <ProductCard imgHeight={"220px"} width={270} height={"350px"} key={product._id} product={product} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
