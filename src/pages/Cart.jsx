import { Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import BreadCrumb from "../components/BreadCrumb";
import { ScaleLoader } from "react-spinners";
import { AiFillWarning } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cart, loading, error, setCart }) => {
  const handleDeleteFromCart = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        // Handle the case where the token is not available
        return alert("Token not found");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Send a request to remove the product from the cart
      const res = await axios.put(`http://localhost:5000/cart/delete/${id}`, {}, config);

      // Update the cart state with the updated cart data
      setCart(res.data.cart);
      alert("Product deleted successfully");
    } catch (err) {
      console.error("Error deleting product from cart:", err.message);
      alert("Failed to delete product from Cart. Please try again.");
    }
  };


  return (
    <Box>
      <Box>
        <BreadCrumb text="Cart" />
      </Box>
      <Box py="70px">
        <Box maxWidth={"1150px"} mx="auto" height={"500px"}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  height: "50px",
                  paddingBlock: "15px",
                  borderBottom: "1px solid#dee2e6",
                }}
              >
                <th
                  style={{
                    width: "40%",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: '"Roboto",sans-serif',
                    color: "#797979",
                  }}
                >
                  Product
                </th>
                <th
                  style={{
                    width: "15%",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: '"Roboto",sans-serif',
                    color: "#797979",
                  }}
                >
                  Price
                </th>
                <th
                  style={{
                    width: "20%",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: '"Roboto",sans-serif',
                    color: "#797979",
                  }}
                >
                  Quantity
                </th>
                <th
                  style={{
                    width: "15%",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: '"Roboto",sans-serif',
                    color: "#797979",
                  }}
                >
                  Total
                </th>
                <th
                  style={{
                    width: "10%",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: '"Roboto",sans-serif',
                    color: "#797979",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5}>
                    <Box
                      height="100px"
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <ScaleLoader color="#71cd14" height={30} width={10} />
                    </Box>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={5}>
                    <Box
                      height="100px"
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
                  </td>
                </tr>
              ) : cart.products?.length < 1 ? (
                <tr
                  style={{
                    height: "70px",
                  }}
                >
                  <td colSpan={5}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "18px",
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: "500",
                        color: "#797979",
                        textAlign: "center",
                      }}
                    >
                      Your Cart is Empty
                    </Typography>
                  </td>
                </tr>
              ) : (
                cart.products?.map((item) => {
                  return (
                    <tr
                      key={item.productId}
                      style={{
                        height: "120px",
                        paddingBlock: "15px",
                        borderBottom: "1px solid#dee2e6",
                      }}
                    >
                      <td
                        style={{
                          width: "50%",
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily: '"Roboto",sans-serif',
                          color: "#797979",
                        }}
                      >
                        <Box
                          display={"flex"}
                          gap={"20px"}
                          alignItems={"center"}
                        >
                          <img
                            style={{
                              height: "100px",
                              width: "100px",
                              objectFit: "contain",
                              objectPosition: "center",
                              border: "1px solid #e2e2e2",
                              padding: "10px",
                            }}
                            src={item.image}
                            alt={item.name}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "400",
                              fontFamily: "'Roboto', sans-serif",
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      </td>
                      <td>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            fontFamily: "'Roboto', sans-serif",
                            color: "#2a2a2a",
                          }}
                        >
                          ${item.price}
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            fontFamily: "'Roboto', sans-serif",
                            color: "#2a2a2a",
                          }}
                        >
                          {item.qty}
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            fontFamily: "'Roboto', sans-serif",
                            color: "#2a2a2a",
                          }}
                        >
                          ${(item.price * item.qty).toFixed(2)}
                        </Typography>
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <IconButton
                          onClick={() => handleDeleteFromCart(item.productId)}
                        >
                          <FaTrash />
                        </IconButton>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
