import {Container, Grid, Typography} from "@mui/material";

export function Header() {
    return <>
        <Grid sx={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto'}}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Container maxWidth="md">
                    <Typography variant="h1" sx={{fontFamily: 'Nunito, sans-serif', marginTop: '5%', mx: 2}}>Tibo Koninckx</Typography>
                    <Typography  variant="h4" sx={{fontFamily: 'Nunito, sans-serif', marginTop: '15%', mx: 2}}>I'AM A WEB DEVELOPER, I TRANSFORM YOUR
                        DESIRES INTO VIBRANT CODE, BRINGING YOUR IDEAS TO LIFE ON THE DIGITAL CANVAS OF WEBSITES</Typography>
                    <Typography variant="subtitle1" mt={2} sx={{fontFamily: 'Nunito, sans-serif', mx:2}}>Passionate about web development and currently pursuing a
                        degree in programming at Thomas More University of Applied Sciences. Transforming ideas into code and embracing the journey of continuous
                        learning. Let's build something amazing together!</Typography>
                </Container>
            </Grid>
        </Grid>
    </>
}