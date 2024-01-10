import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProductCard = ({ product, width, height, imgHeight }) => {
  return (
    <Card
      sx={{ width: width, height: height, borderRadius: "0" }}
      elevation={0}
    >
      <CardMedia
        component={Link}
        to={`/products/${product._id}`}
        sx={{
          width: "100%",
          height: imgHeight,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        image={product.image}
        title={product.name}
      />
      <CardContent sx={{ p: "22px 25px 18px", border: "1px solid #f0f2f1" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: "'Heebo', sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            color: "#4a4a4a",
          }}
        >
          {product.name.length > 30
            ? product.name.slice(0, 26) + "..."
            : product.name}
        </Typography>
        <Typography
          mt={"16px"}
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: '"Heebo",sans-serif',
            fontSize: "20px",
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
