import {
  Box,
  Button,
  Divider,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchCart } from "../api/api";

const ProductDetail = ({ setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const API_ENDPOINT = "https://eiser-ecommerce-backend.onrender.com";
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/products/${id}`)
      .then((res) => setProduct(res.data.product))
      .catch(console.log);
  }, [id]);

  const handleAddToCart = async () => {
    try {
      if (parseInt(qty) < 1) {
        alert("Please enter a valid Quantity");
      } else {
        const userCart = await fetchCart();

        const existingProductIndex = userCart.products.findIndex(
          (product) => product.productId === product._id
        );

        const token = localStorage.getItem("token");
        if (!token) {
          alert("please login first");
          return "Token not found";
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        if (existingProductIndex !== -1) {
          await axios.put(`${API_ENDPOINT}/cart/addToCart`, {
            ...userCart.products[existingProductIndex],
            qty: parseInt(qty),
          }, config);
          alert("Updated quantity in Cart");
        } else {
          await axios.put(API_ENDPOINT + "/cart/addToCart", {
            productId: product._id,
            name: product.name,
            qty: parseInt(qty),
            image: product.image,
            price: product.price,
            category: product.category,
          }, config);

          setSnackbarSeverity('success');
          setSnackbarMessage('Product Added to cart Successfully');
          setSnackbarOpen(true);

          const updatedCart = await fetchCart();
          setCart(updatedCart);
        }

        setQty(1);
      }
    } catch (error) {
      console.log("Error adding to cart:", error.response);
      setSnackbarSeverity('error');
      setSnackbarMessage('Failed to add to cart, Make sure you are logged in!');
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Box>
        <BreadCrumb text="Product Details" />
      </Box>
      <Box pt={{ xs: "60px", md: "80px" }} pb={{ xs: "100px", md: "150px" }}>
        <Box maxWidth={{ md: "1140px" }} mx="auto">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                }}
                src={product?.image}
                alt="product"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "22px", md: "24px" },
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
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems={{ xs: "start", md: "center" }}
                gap="10px"
                mb="10px"
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "300",
                    color: "#555",
                  }}
                >
                  Category:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#71cd14",
                  }}
                >
                  {product?.category}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems={{ xs: "start", md: "center" }}
                gap="20px"
                mb="10px"
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "300",
                    color: "#555",
                  }}
                >
                  Availability:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#555",
                  }}
                >
                  In Stock
                </Typography>
              </Box>
              <Divider mb="10px" />
              <Box mb="20px">
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#797979",
                    pr: { xs: "20px", md: "50px" },
                  }}
                >
                  {product?.description}
                </Typography>
              </Box>
              <Box display="flex" gap="15px" flexDirection={{ xs: "column", md: "row" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#797979",
                    mb: { xs: "10px", md: "0" },
                  }}
                >
                  Quantity:
                </Typography>
                <input
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  style={{
                    width: { xs: "100%", md: "76px" },
                    border: "1px solid #eee",
                    padding: "4px 8px",
                    outline: "none",
                  }}
                  type="number"
                  id="qty"
                />
              </Box>
              <Box mt={{ xs: "20px", md: "40px" }}>
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductDetail;
