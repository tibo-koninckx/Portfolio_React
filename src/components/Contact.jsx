import {Box, Divider, Grid, TextField, Typography, Link} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Contact() {
    return <>
        <Box component="form" autoComplete="off" sx={{
            background: 'white',
            height: '100vh',
            '& .MuiTextField-root': { m: 1, width: '50ch', }
        }}>
            <Box sx={{color: 'black'}}>
                <Typography variant="h2" sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', pt:2}}>Contact Me</Typography>
                <Divider>Let's connect</Divider>
            </Box>
            <Box className="contact">
                <Grid>
                    <Grid item xs={12} sm={6} md={8} lg={12} sx={{mt:5}}>
                        <TextField sx={{mr: 2}}
                                   id="FirstName"
                                   label="FirstName"
                                   variant="outlined"
                                   margin="normal"
                                   required
                        />

                        <TextField
                            id="LastName"
                            label="LastName"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={12}>
                        <TextField
                            id="email"
                            label="email"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                            id="message"
                            label="Message"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={4}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box className="contact" sx={{mt:2}}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Link href="https://www.linkedin.com/in/tibokoninckx" target="_blank"><LinkedInIcon color="primary" fontSize="large" sx={{mr:2}}/></Link>
                    <Link href="https://github.com/tibo-koninckx" target="_blank"><GitHubIcon color="success" fontSize="large"/></Link>
                </Grid>
            </Box>
        </Box>
    </>
}