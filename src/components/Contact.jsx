import {Box, Grid, TextField, Typography} from "@mui/material";

export function Contact() {
    return <>
        <Box component="form" autoComplete="off" sx={{
            background: 'white',
            height: '100vh',
            '& .MuiTextField-root': { m: 1, width: '50ch', }
        }}>
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
        </Box>
    </>
}