import {Box, Grid, Typography} from "@mui/material";

export function About(props) {
    const {fullStack, frameworks, tools, bio, interests} = props;
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: {xs: '8%', sm: '3%', lg: '3%'},
                        textAlign: 'center'
                    }}>About me</Typography>

                    {bio.length > 0 && (
                        <Box sx={{background: '#555555', marginLeft: '15%', marginRight: '15%'}}>
                            <Typography variant="h2" sx={{
                                fontFamily: 'Nunito, sans-serif',
                                marginTop: '2%',
                                textAlign: 'center'
                            }}>Biography</Typography>

                            <Typography variant="body1"
                                        sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '25%'}}>
                                {bio.map((b, index) => (
                                    <span key={index}>{b}</span>
                                ))}
                            </Typography>
                        </Box>
                    )}

                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: '2%',
                        textAlign: 'center'
                    }}>Skills</Typography>
                    <Grid container justifyContent="center">
                        {fullStack.length > 0 && (
                                <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center', background: '#555555'}}>
                                    <Typography variant="body1" className="no-first-letter"
                                                sx={{fontFamily: 'Nunito, sans-serif'}}>
                                        <Typography variant="h4" sx={{
                                            fontFamily: 'Nunito, sans-serif',
                                            textAlign: 'center'
                                        }}>Full stack web development</Typography>
                                        <ul>
                                            {fullStack.map((f, index) => (
                                                <li key={index}>{f.name}</li>
                                            ))}
                                        </ul>
                                    </Typography>
                                </Grid>
                        )}
                        {frameworks.length > 0 && (
                            <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center', background: '#555555', mx:{xl:2, lg:2}}}>
                                <Typography variant="body1" className="no-first-letter"
                                            sx={{fontFamily: 'Nunito, sans-serif'}}>
                                    <Typography variant="h4" sx={{
                                        fontFamily: 'Nunito, sans-serif',
                                        textAlign: 'center'
                                    }}>Frameworks</Typography>
                                    <ul>
                                        {frameworks.map((f, index) => (
                                            <li key={index}>{f.name}</li>
                                        ))}
                                    </ul>
                                </Typography>
                            </Grid>
                        )}
                        {tools.length > 0 && (
                            <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center', background: '#555555'}}>
                                <Typography variant="body1" className="no-first-letter"
                                            sx={{fontFamily: 'Nunito, sans-serif'}}>
                                    <Typography variant="h4" sx={{
                                        fontFamily: 'Nunito, sans-serif',
                                        textAlign: 'center'
                                    }}>Tools</Typography>
                                    <ul>
                                        {tools.map((t, index) => (
                                            <li key={index}>{t.name}</li>
                                        ))}
                                    </ul>
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                    {interests.length > 0 && (
                        <div>
                            <Typography variant="h2" sx={{
                                fontFamily: 'Nunito, sans-serif',
                                marginTop: '2%',
                                textAlign: 'center'
                            }}>Personal interests</Typography>
                            <Typography variant="body1"
                                        sx={{
                                            fontFamily: 'Nunito, sans-serif',
                                            textAlign: 'center',
                                            marginX: '25%'
                                        }}>{interests.map(i => i)}</Typography>
                        </div>
                    )}
                </Grid>
            </Grid>
        </>
    );
}
