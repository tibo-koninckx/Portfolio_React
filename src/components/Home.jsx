import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {motion} from "framer-motion"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Link} from "react-router-dom";

export function Home() {
    return <>
        <motion.div>
            <Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Container style={{textAlign: 'center'}}>
                        <Typography variant="h1" sx={{fontFamily: 'Nunito, sans-serif', marginTop: '5%', mx: 2}}>Tibo
                            Koninckx</Typography>
                        <Typography variant="h3" sx={{
                            fontFamily: 'Nunito, sans-serif',
                            marginTop: {xl: '5%', lg: '5%', md: '5%', xs: '15%'},
                            mx: 2
                        }}>Full stack Web developer</Typography>
                        <Typography variant="h3" sx={{
                            mt: 5,
                            mx: 2
                        }}><a style={{color:'white', textDecoration: 'none'}} href="mailto:tibo.koninckx@gmail.com">tibo.koninckx@gmail.com</a></Typography>
                        <Typography variant="h3" sx={{
                            fontFamily: 'Nunito, sans-serif',
                            mt:2,
                            mx: 2
                        }}>+32 486 54 45 01</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <motion.div whileHover={{scale: 1.2}}>
                                <Link to="https://www.linkedin.com/in/tibokoninckx" target="_blank"><LinkedInIcon
                                    color="info" fontSize="large" sx={{mr: 2}}/></Link>
                            </motion.div>
                            <motion.div whileHover={{scale: 1.2}}>
                                <Link to="https://github.com/tibo-koninckx" target="_blank"><GitHubIcon color="success"
                                                                                                          fontSize="large"/></Link>
                            </motion.div>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt:4}}>
                            <motion.div whileHover={{scale: 1.2}}>
                                <Link to="/about"><Button variant="contained" color="primary" sx={{mr:4}} size="large">About me</Button></Link>
                            </motion.div>
                            <motion.div whileHover={{scale: 1.2}}>
                                <Link to="/projects"> <Button variant="contained" color="primary" href="/projects" size="large">My projects</Button></Link>
                            </motion.div>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </motion.div>
    </>
}