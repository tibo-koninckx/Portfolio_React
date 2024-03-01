"use client";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
//import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export function Home() {
    return (
        <Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Container style={{textAlign: 'center'}}>
                    <Typography variant="h1" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: '5%',
                        mx: 2,
                        fontSize: {lg: '6rem', md: '6rem', sm: '6rem', xs: '4rem'}
                    }}>Tibo
                        Koninckx</Typography>
                    <Typography variant="body1" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: {lg: 40, md: 40, sm: 40, xs: 30},
                        marginTop: {xl: '5%', lg: '5%', md: '5%', xs: '15%'},
                        mx: 2
                    }}>Full stack Web developer</Typography>
                    <Typography className="no-first-letter" variant="body1" sx={{
                        fontSize: {lg: 40, md: 40, sm: 40, xs: 30},
                        mt: 5,
                    }}><a style={{color: 'white', textDecoration: 'none'}}
                          href="mailto:tibo.koninckx@gmail.com">tibo.koninckx@gmail.com</a></Typography>
                    <Typography className="no-first-letter" variant="body1" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: {lg: 40, md: 40, sm: 40, xs: 30},
                        mt: 2,
                        mx: 2
                    }}>+32 486 54 45 01</Typography>
 {/*                   <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <motion.div whileHover={{scale: 1.2, cursor: 'pointer'}}>
                            <a className="no-style" href="https://www.linkedin.com/in/tibokoninckx"
                               target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.2, cursor: 'pointer'}}>
                            <a className="no-style" href="https://github.com/tibo-koninckx"
                               target="_blank"><FontAwesomeIcon style={{marginLeft: '50%'}} icon={faGithub}
                                                                size="2xl"/></a>
                        </motion.div>
                    </Box>*/}
{/*                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
                        <motion.div whileHover={{scale: 1.2}}>
                            <Button variant="contained" color="primary" sx={{mr: 4}} size="large">
                                <a className="no-style" href="/about">About me</a>
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.2}}>
                            <Button variant="contained" color="primary" size="large">
                                <a className="no-style" href="/projects">My projects</a>
                            </Button>
                        </motion.div>
                    </Box>*/}
                </Container>
            </Grid>
        </Grid>
    );
}
