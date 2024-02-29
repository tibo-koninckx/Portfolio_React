import {Alert, Box, Button, Grid, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
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
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then(
                (result) => {
                    setMessage("Email succesfully send!");

                },
                (error) => {
                    setMessage("Sending mail failed, please try again later!");
                }
            ).finally(() => {
            e.target.reset();
        });
    }

    useEffect(() => {
        if (message) {
            setAlert(
                <Alert onClose={() => {
                    setClose(true);
                    clearMessage();
                }} severity={message.includes('succesfully') ? "success" : "error"}>
                    {message}
                </Alert>
            );
        }
    }, [message]);

    return <>
        <Box component="form" onSubmit={sendEmail} autoComplete="off">
            <Box>
                <Typography variant="h2" sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', pt: 2}}>Contact
                    Me</Typography>
                <Typography variant="body1" sx={{textAlign: 'center', fontFamily: 'Nunito, sans-serif'}}
                            className="no-first-letter">Let's connect</Typography>
            </Box>
            <Box sx={{mt:2, mx:{xs:5}, marginLeft:{lg: '20%', md: '20%', sm: '20%'}, marginRight:{lg: '20%', md: '20%', sm: '20%'}}}>{!close && alert}</Box>
            <Box sx={{
                padding: {lg: '0 25% 0 25%', md: '0 10% 0 10%', sm: '0 10% 0 10%', xs: '0 10% 0 10%'}
            }}>
                <Box sx={{ input: { color: 'white' } }}>
                    <Grid item xs={12} sm={6} md={6} lg={6} sx={{mt: 5}}>
                        <TextField
                            sx={{
                                mr: 2,
                                width: 'calc(50% - 16px)',
                                '& label': {
                                    color: 'white',
                                },
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '& .MuiFilledInput-underline:before': {
                                    borderBottomColor: 'white !important',
                                },
                                '&:hover .MuiFilledInput-underline:before': {
                                    borderBottomColor: 'white !important',
                                }
                            }}
                            color="warning"
                            id="FirstName"
                            label="FirstName"
                            variant="filled"
                            margin="normal"
                            name="firstName"
                            onChange={handleInputChange}
                            required
                        />

                        <TextField
                            sx={{
                                width: 'calc(50% - 16px)',
                                '& label': {
                                    color: 'white',
                                },
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '& .MuiFilledInput-underline:before': {
                                    borderBottomColor: 'white !important',
                                },
                                '&:hover .MuiFilledInput-underline:before': {
                                    borderBottomColor: 'white !important',
                                },
                            }}
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
                        <TextField sx={{
                            '& label': {
                                color: 'white',
                            }, '& fieldset': {
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
                        <TextField inputProps={{ style: { color: "white" } }}
                                   sx={{
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
                </Box>
            </Box>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box sx={{display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
                    <motion.div whileHover={{scale: 1.2}}>
                        <Link className="no-style" to="https://www.linkedin.com/in/tibokoninckx"
                              target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></Link>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.2, cursor: 'pointer'}}>
                        <Link className="no-style" to="https://github.com/tibo-koninckx"
                              target="_blank"><FontAwesomeIcon style={{marginLeft: '50%'}} icon={faGithub} size="2xl"/></Link>
                    </motion.div>
                </Box>
            </Grid>

        </Box>
    </>
}