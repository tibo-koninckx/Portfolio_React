import { Grid, Typography } from "@mui/material";

export function About() {
    return (
        <>
            <Grid container sx={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
                <Grid item xs={12} sm={10} md={12} lg={12}>
                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: { xs: '8%', sm: '3%', lg: '3%' },
                        textAlign: 'center'
                    }}>About me</Typography>

                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: '2%',
                        textAlign: 'center'
                    }}>Biography</Typography>

                    <Typography variant="body1" sx={{ fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '25%' }}>
                        My name is Tibo Koninckx, I live in Mortsel. I completed a degree in programming at Thomas More University of Applied Sciences in Sint Katelijne Waver (De Nayer campus). I became interested in Web development when a secondary school teacher explained how to create a website with HTML and CSS. That's how I became interested in web development.
                    </Typography>

                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: '2%',
                        textAlign: 'center'
                    }}>Skills</Typography>

                </Grid>
            </Grid>
        </>
    );
}
