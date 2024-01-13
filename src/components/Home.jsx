import {Box, Container, Grid, Link, Typography} from "@mui/material";
import {motion} from "framer-motion"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Home() {
    return <>
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
                        fontFamily: 'Nunito, sans-serif',
                        mt: 5,
                        mx: 2
                    }}><a style={{color:'white', textDecoration: 'none'}} href="mailto:tibo.koninckx@gmail.com">tibo.koninckx@gmail.com</a></Typography>
                    <Typography variant="h3" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        mt:2,
                        mx: 2
                    }}>+32 486 54 45 01</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div whileHover={{scale: 1.5}}>
                            <Link href="https://www.linkedin.com/in/tibokoninckx" target="_blank"><LinkedInIcon
                                color="info" fontSize="large" sx={{mr: 2}}/></Link>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.5}}>
                            <Link href="https://github.com/tibo-koninckx" target="_blank"><GitHubIcon color="success"
                                                                                                      fontSize="large"/></Link>
                        </motion.div>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    </>
}