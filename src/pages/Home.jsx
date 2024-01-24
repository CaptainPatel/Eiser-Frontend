import Banner from "../components/Banner";
import { Box, Divider, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { ScaleLoader } from "react-spinners";
import { AiFillWarning } from "react-icons/ai";

const Home = ({ products, loading, error }) => {
  return (
    <div>
      <Banner />
      <Box py={{ xs: "40px", md: "80px" }}>
        <Box maxWidth={"1200px"} mx={"auto"}>
          <Box mb={{ xs: "40px", md: "75px" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "700",
                fontSize: "24px",
                color: "#2a2a2a",
                fontFamily: "'Heebo', sans-serif",
                mb: "15px",
                textAlign: "center",
              }}
            >
              FEATURED PRODUCT
            </Typography>
            <Divider sx={{ maxWidth: "300px", mx: "auto", mb: "15px" }} />
            <Typography
              variant="body1"
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                color: "#797979",
                fontFamily: "'Roboto', sans-serif",
                textAlign: "center",
              }}
            >
              Bring called seed first of third give itself now ment
            </Typography>
          </Box>

          {loading ? (
            <Box
              height={{ xs: "30vh", md: "50vh" }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ScaleLoader color="#71cd14" height={50} width={10} />
            </Box>
          ) : error ? (
            <Box
              height={{ xs: "30vh", md: "50vh" }}
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
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
                mt: "50px",
              }}
            >
              {products?.slice(1, 4).map((product) => {
                return (
                  <ProductCard
                    width={{ xs: "100%", sm: "300px", md: "340px" }}
                    height={{ xs: "200px", sm: "300px", md: "519px" }}
                    imgHeight={{ xs: "150px", sm: "220px", md: "420px" }}
                    key={product._id}
                    product={product}
                  />
                );
              })}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
