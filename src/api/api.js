import axios from "axios";

const API_ENDPOINT = "http://localhost:5000"

async function fetchCart() {
  try {
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

    const res = await axios.get(API_ENDPOINT + "/cart", config);
    return res.data.cart;
  } catch (error) {
    return (
      error.message ||
      (error.response && error.response.data.message) ||
      "Something went wrong"
    );
  }
}

async function register(name, email, password) {
  try {
    let res = await axios.post(API_ENDPOINT + "/users/register", {
      email, password, username: name
    });
    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.log(error.error)
  }
}

// Example login function in api.js
async function login(email, password) {
  try {
    const res = await axios.post(API_ENDPOINT + "/users/login", {
      email,
      password,
    });
    if (!res.data.success) {
      throw new Error(res.data.error); // Throw an error with the error message
    } else {
      return res.data.user;
    }
  } catch (error) {
    throw new Error('Failed to log in'); // Throw a generic error for unexpected issues
  }
}

function logout() {
  localStorage.removeItem("token");
  console.log("logged out");
}




export { fetchCart, register, login, logout };
