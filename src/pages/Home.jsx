import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import FeatureRow from "../components/FeatureRow";
import { Box, Divider, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { ScaleLoader } from "react-spinners";
import { AiFillWarning } from "react-icons/ai";

const Home = ({ products, loading, error }) => {
  return (
    <div>
      <Banner />
      <FeatureRow />
      <Banner2 />

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
                    width={{ xs: "70%", sm: "170px", md: "240px" }}
                    height={{ xs: "190px", sm: "290px", md: "319px" }}
                    imgHeight={{ xs: "120px", sm: "150px", md: "170px" }}
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
