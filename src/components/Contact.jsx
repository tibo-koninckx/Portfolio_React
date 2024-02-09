import {Alert, Box, Button, Divider, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import * as emailjs from "@emailjs/browser";
import {useMessageContext} from "../contexts/messageContext";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [alert, setAlert] = useState(null);
    const [close, setClose] = useState(false);
    const {message, clearMessage, setMessage} = useMessageContext();

    function handleInputChange(e) {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then(
                (result) => {
                    setMessage("Email succesfully send!");
                    setAlert(<Alert onClose={() => {setClose(true); clearMessage();}} severity="success">{message}</Alert>);

                    },
                (error) => {
                    setMessage("Sending mail failed, please try again later!");
                    setAlert(<Alert onClose={() => setClose(true)} severity="error">{message}</Alert>);
                }
            );

        e.target.reset();
    }
    return <>
        <Box component="form" onSubmit={sendEmail} autoComplete="off">
            <Box>
                <Typography variant="h2" sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', pt: 2}}>Contact
                    Me</Typography>
                <Typography variant="body1" sx={{textAlign: 'center', fontFamily: 'Nunito, sans-serif'}} className="no-first-letter">Let's connect</Typography>
            </Box>
            <Box>{!close && alert}</Box>
            <Box sx={{
                mx:5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'}}>
                <Grid>
                    <Grid item xs={12} sm={6} md={8} lg={12} sx={{mt: 5}}>
                        <TextField sx={{mr:2, '& label': {
                                color: 'white',
                            },     '& fieldset': {
                                borderColor: 'white',
                            },
                            '& .MuiFilledInput-underline:before': {
                                borderBottomColor: 'white !important',
                            },
                            '&:hover .MuiFilledInput-underline:before': {
                                borderBottomColor: 'white !important',
                            },
                        }}
                                   fullWidth
                                   color="warning"
                                   id="FirstName"
                                   label="FirstName"
                                   variant="filled"
                                   margin="normal"
                                   name="firstName"
                                   onChange={handleInputChange}
                                   required
                        />

                        <TextField sx={{'& label': {
                                color: 'white',
                            },     '& fieldset': {
                                borderColor: 'white',
                            },
                            '& .MuiFilledInput-underline:before': {
                                borderBottomColor: 'white !important',
                            },
                            '&:hover .MuiFilledInput-underline:before': {
                                borderBottomColor: 'white !important',
                            },
                        }} fullWidth
                            color="warning"
                            id="LastName"
                            label="LastName"
                            variant="filled"
                            margin="normal"
                            name="lastName"
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={12}>
                        <TextField sx={{'& label': {
                                color: 'white',
                            },     '& fieldset': {
                                borderColor: 'white',
                            },
                            '& .MuiFilledInput-underline:before': {
                                borderBottomColor: 'white !important',
                            },
                            '&:hover .MuiFilledInput-underline:before': {
                                borderBottomColor: 'white !important',
                            },
                        }}
                                   fullWidth
                            color="warning"
                            id="email"
                            label="email"
                            variant="filled"
                            margin="normal"
                            name="email"
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField sx={{
                            mr: 2,
                            '& label': {
                                color: 'white',
                            },
                            '& .MuiFilledInput-underline:before': {
                                borderBottomColor: 'white !important',
                            },
                            '&:hover .MuiFilledInput-underline:before': {
                                borderBottomColor: 'white !important',
                            },
                        }}
                                   fullWidth
                            color="warning"
                            id="message"
                            label="Message"
                            variant="filled"
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
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div whileHover={{scale: 1.2}}>
                            <Link className="no-style" to="https://www.linkedin.com/in/tibokoninckx" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></Link>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.2}}>
                            <Link className="no-style" to="https://github.com/tibo-koninckx" target="_blank"><FontAwesomeIcon style={{marginLeft: '50%'}} icon={faGithub} size="2xl" /></Link>
                        </motion.div>
                    </Box>
                </Grid>

        </Box>
    </>
}