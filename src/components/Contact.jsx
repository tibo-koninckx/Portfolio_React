import {Box, Grid, TextField, Typography} from "@mui/material";

export function Contact() {
    return <>
        <Box component="form" autoComplete="off" sx={{
            display: 'flex',
            justifyContent: 'center',
            background: 'white',
            '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}>
            <Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
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
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                        id="email"
                        label="email"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
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
    </>
}