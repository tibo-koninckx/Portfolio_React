import {Grid, Typography} from "@mui/material";

export function About() {
    return <>
        <Grid container spacing={2}>
            <Grid xs={12} sm={10} lg={12}>
                <Typography variant="h2" sx={{fontFamily: 'Nunito, sans-serif', marginTop: '5%', textAlign: 'center'}}>About me</Typography>

            </Grid>
        </Grid>
    </>
}