import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchCart } from "../api/api";

const ProductDetail = ({ setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setProduct(res.data.product))
      .catch(console.log);
  }, [id]);

  const handleAddToCart = async () => {
    try {
      if (parseInt(qty) < 1) {
        alert("Please enter a valid Quantity");
      } else {
        // Fetch the user's cart
        const userCart = await fetchCart();

        // Check if the product is already in the cart
        const existingProductIndex = userCart.products.findIndex(
          (product) => product.productId === product._id
        );

        const token = localStorage.getItem("token");
        if (!token) {
          // Handle the case where the token is not available
          return "Token not found";
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        if (existingProductIndex !== -1) {
          // If the product is in the cart, update the quantity
          await axios.put(`http://localhost:5000/cart/addToCart`, {
            ...userCart.products[existingProductIndex],
            qty: parseInt(qty),
          }, config);
          alert("Updated quantity in Cart");
        } else {
          // If the product is not in the cart, add it
          await axios.put("http://localhost:5000/cart/addToCart", {
            productId: product._id,
            name: product.name,
            qty: parseInt(qty),
            image: product.image,
            price: product.price,
            category: product.category,
          }, config);

          alert("Added to Cart successfully");

          // Fetch the updated cart and set it in the state
          const updatedCart = await fetchCart();
          setCart(updatedCart);
        }

        // Reset the quantity to 1
        setQty(1);
      }
    } catch (error) {
      console.error("Error adding to cart:", error.response);
      alert("Failed to add to Cart. Please try again.");
    }
  };


  return (
    <Box>
      <Box>
        <BreadCrumb text="Product Details" />
      </Box>
      <Box pt={"60px"} pb={"150px"}>
        {/* Render Product Here */}
        <Box maxWidth={"1140px"} mx={"auto"}>
          <Grid container height={"580px"}>
            <Grid item xs={12} md={6} px={"50px"}>
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                src={product?.image}
                alt="image"
              />
            </Grid>
            <Grid item xs={12} md={6} px={"20px"} py={"30px"}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Heebo', sans-serif",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#2a2a2a",
                  mb: "10px",
                  lineHeight: "1.2",
                }}
              >
                {product?.name}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Heebo', sans-serif",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#71cd14",
                  mb: "15px",
                  lineHeight: "1.2",
                }}
              >
                ${product?.price}
              </Typography>
              <Box
                display={"flex"}
                gap={"10px"}
                alignItems={"center"}
                mb={"10px"}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: "300",
                    color: "#555",
                  }}
                >
                  Category &nbsp;&nbsp;:{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: "400",
                    color: "#71cd14",
                  }}
                >
                  {product?.category}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                gap={"20px"}
                alignItems={"center"}
                mb={"10px"}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: "300",
                    color: "#555",
                  }}
                >
                  Availibility &nbsp;&nbsp;:{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: "400",
                    color: "#555",
                  }}
                >
                  In Stock
                </Typography>
              </Box>
              <Divider sx={{ mb: "10px" }} />
              <Box m={"20px 0 70px 0"}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "'Roboto', sans-serif",
                    color: "#797979",
                    pr: "50px",
                  }}
                >
                  {product?.description}
                </Typography>
              </Box>
              <Box display={"flex"} gap={"15px"}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "'Roboto', sans-serif",
                    color: "#797979",
                  }}
                >
                  Quantity :
                </Typography>
                <input
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  style={{
                    width: "76px",
                    border: "1px solid #eee",
                    padding: "4px 8px",
                    outline: "none",
                  }}
                  type="number"
                  id="qty"
                />
              </Box>
              <Box>
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{
                    mt: "40px",
                    bgcolor: "#71cd14",
                    lineHeight: "44px",
                    paddingInline: "32px",
                    paddingBlock: "0px",
                    "&:hover": {
                      bgcolor: "#559712",
                    },
                  }}
                >
                  Add To Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
