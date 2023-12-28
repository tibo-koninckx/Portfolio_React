import {Box, Grid, TextField, Typography} from "@mui/material";

export function Contact() {
    return <>
        <Box component="form" autoComplete="off" sx={{textAlign: 'center', background: 'white'}}>
            <Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                        id="FirstName"
                        label="FirstName"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                </Grid>
            </Grid>
        </Box>
    </>
}