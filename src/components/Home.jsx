import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {motion} from "framer-motion"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export function Home() {
    return <>
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
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <motion.div whileHover={{scale: 1.2, cursor: 'pointer'}}>
                            <Link className="no-style" to="https://www.linkedin.com/in/tibokoninckx"
                                  target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></Link>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.2, cursor: 'pointer'}}>
                            <Link className="no-style" to="https://github.com/tibo-koninckx"
                                  target="_blank"><FontAwesomeIcon style={{marginLeft: '50%'}} icon={faGithub}
                                                                   size="2xl"/></Link>
                        </motion.div>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
                        <motion.div whileHover={{scale: 1.2}}>
                            <Link to="/about"><Button variant="contained" color="primary" sx={{mr: 4}} size="large">About
                                me</Button></Link>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.2}}>
                            <Link to="/projects"> <Button variant="contained" color="primary" href="/projects"
                                                          size="large">My projects</Button></Link>
                        </motion.div>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    </>
}