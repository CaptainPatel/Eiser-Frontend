import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProductCard = ({ product, width, height, imgHeight }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: width, md: width },
        height: { xs: "auto", sm: height, md: height },
        borderRadius: "0",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "2a2a2a"
      }}
      elevation={0}
    >
      <CardMedia
        component={Link}
        to={`/products/${product._id}`}
        sx={{
          width: "60%",
          height: imgHeight,
          backgroundSize: "contain",
          backgroundPosition: "center",
          mixBlendMode: "darken"
        }}
        image={product.image}
        title={product.name}
      />
      <CardContent sx={{ p: { xs: "12px", sm: "22px 25px 18px" }, border: "1px solid black", width: "97%" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: "'Heebo', sans-serif",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "400",
            color: "#4a4a4a",
          }}
        >
          {product.name.length > 30
            ? product.name.slice(0, 26) + "..."
            : product.name}
        </Typography>
        <Typography
          mt={{ xs: "8px", sm: "16px" }}
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: '"Heebo",sans-serif',
            fontSize: { xs: "16px", sm: "20px" },
            fontWeight: "500",
            lineHeight: "16px",
            color: "#2a2a2a",
          }}
        >
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
