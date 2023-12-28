import {Alert, Box, Button, Divider, Grid, Link, TextField, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useState} from "react";
import * as emailjs from "@emailjs/browser";

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [alert, setAlert] = useState(null);
    const [close, setClose] = useState(false);

    function handleInputChange(e) {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function sendEmail(e) {
        e.preventDefault();

        console.log("Form Data:", formData);

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then(
                (result) => {
                    setAlert(<Alert onClose={() => setClose(true)} severity="success">Email succesfully send</Alert>);

                    },
                (error) => {
                    setAlert(<Alert onClose={() => setClose(true)} severity="error">Sending mail failed, please try again later!</Alert>);
                }
            );

        e.target.reset();
    }
    return <>
        <Box component="form" onSubmit={sendEmail} autoComplete="off" sx={{
            background: 'white',
            height: '100vh',
            '& .MuiTextField-root': {m: 1, width: '50ch'}
        }}>
            <Box sx={{color: 'black'}}>
                <Typography variant="h2" sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', pt: 2}}>Contact
                    Me</Typography>
                <Divider>Let's connect</Divider>
            </Box>
            <Box>{!close && alert}</Box>
            <Box className="contact">
                <Grid>
                    <Grid item xs={12} sm={6} md={8} lg={12} sx={{mt: 5}}>
                        <TextField sx={{mr: 2}}
                                   id="FirstName"
                                   label="FirstName"
                                   variant="outlined"
                                   margin="normal"
                                   name="firstName"
                                   onChange={handleInputChange}
                                   required
                        />

                        <TextField
                            id="LastName"
                            label="LastName"
                            variant="outlined"
                            margin="normal"
                            name="lastName"
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={12}>
                        <TextField
                            id="email"
                            label="email"
                            variant="outlined"
                            margin="normal"
                            name="email"
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                            id="message"
                            label="Message"
                            variant="outlined"
                            margin="normal"
                            name="message"
                            onChange={handleInputChange}
                            multiline
                            rows={4}
                        />
                        <Box>
                            <Grid>
                                <Button type="submit" variant="contained" sx={{mx: 1}}>Send</Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className="contact" sx={{mt: 2}}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Link href="https://www.linkedin.com/in/tibokoninckx" target="_blank"><LinkedInIcon color="primary"
                                                                                                        fontSize="large"
                                                                                                        sx={{mr: 2}}/></Link>
                    <Link href="https://github.com/tibo-koninckx" target="_blank"><GitHubIcon color="success"
                                                                                              fontSize="large"/></Link>
                </Grid>
            </Box>
        </Box>
    </>
}