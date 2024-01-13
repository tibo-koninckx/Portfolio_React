import {Container, Grid, Typography} from "@mui/material";

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
                </Container>
            </Grid>
        </Grid>
    </>
}