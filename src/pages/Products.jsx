import { Box, Typography } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import { ScaleLoader } from "react-spinners";
import { AiFillWarning } from "react-icons/ai";
import ProductsOrganizer from "../components/ProductsOrganizer";
import CategoryBox from "../components/CategoryBox";

const Products = ({ products, loading, error }) => {
  return (
    <Box>
      <Box>
        <BreadCrumb text={"Shop"} />
      </Box>
      <Box display="flex">

        {/* Category Box */}
        <Box>
          <CategoryBox array={["p1", "p2", "p3"]} />
        </Box>


        {/* Products Section */}
        <Box flex="1" py="80px">
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <ProductsOrganizer />
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
                {products?.map((product) => {
                  return <ProductCard imgHeight={"220px"} width={270} height={"350px"} key={product._id} product={product} />;
                })}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
