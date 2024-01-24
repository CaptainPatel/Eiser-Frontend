import { Box, Button, Grid, Snackbar, TextField, Typography } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import MuiAlert from '@mui/material/Alert';

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Captain",
                    from_email: form.email,
                    to_email: "k2patel4947@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    setSnackbarSeverity('success');
                    setSnackbarMessage('Thank you. I will get back to you as soon as possible.');
                    setSnackbarOpen(true);

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    setSnackbarSeverity('error');
                    setSnackbarMessage('Ahh, something went wrong. Please try again.');
                    setSnackbarOpen(true);
                }
            );
    };

    return (
        <Box component={"form"} onSubmit={handleSubmit}>
            <BreadCrumb text="Contact Us" />
            <Box py={{ xs: "20px", md: "70px" }}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={8} lg={6}>
                        <Box maxWidth={{ md: "1150px" }} mx="auto" p={{ xs: "20px", md: "0" }}>
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: "1rem" }}>
                                Get in touch
                            </Typography>
                            <textarea
                                name="message"
                                style={{
                                    width: "100%",
                                    border: "solid gray 1px",
                                    padding: "1rem",
                                    color: "black",
                                    boxSizing: "border-box",
                                }}
                                cols="30"
                                rows="6"
                                placeholder="Enter message"
                                value={form.message}
                                onChange={handleChange}
                            ></textarea>

                            <Box display={{ xs: "block", md: "flex" }} m="1rem 0 0 0">
                                <TextField
                                    name="name"
                                    label="Enter your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    sx={{ width: { xs: "100%", md: "21rem" }, mb: { xs: "1rem", md: "0" }, mr: { xs: "0", md: "1rem" } }}
                                ></TextField>

                                <TextField
                                    name="email"
                                    label="Enter your email"
                                    value={form.email}
                                    onChange={handleChange}
                                    sx={{ width: { xs: "100%", md: "21rem" }, mb: { xs: "1rem", md: "0" }, ml: { xs: "0", md: "1rem" } }}
                                ></TextField>
                            </Box>

                            <TextField name="subject" label="Enter Subject" sx={{ width: "100%", my: "1rem" }}></TextField>

                            <Box mt="1rem">
                                <Button variant="contained" type="submit" sx={{ bgcolor: "#71ca00", width: "100%" }}>
                                    Send Message
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleSnackbarClose}
                    severity={snackbarSeverity}
                >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
