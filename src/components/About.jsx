import {Box, Grid, Typography} from "@mui/material";
import {ConvertMdToJs} from "./ConvertMdToJs";
import Biography from "../content/about/Biography.md";
import PersonalInterests from "../content/about/Personal-interests.md"

export function About(props) {
    const {fullStack, frameworks, tools, bio, interests} = props;
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    {bio.length > 0 && (
                        <Box>
                            <Typography variant="h2" sx={{
                                fontFamily: 'Nunito, sans-serif',
                                marginTop: '2%',
                                textAlign: 'center'
                            }}>Biography</Typography>

                            <Box sx={{background: '#555555', marginLeft:{lg: '11%', xl:'11%', md:'11%'}, marginRight: {lg: '11%', xl:'11%', md:'11%'}, pb:2, pt:2, marginTop: '2%'}}>
                                <Typography variant="body1"
                                            sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '25%', fontSize: 20}}>
                                    <ConvertMdToJs mdFille={Biography}/>
                                </Typography>
                            </Box>

                        </Box>
                    )}

                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: '2%',
                        textAlign: 'center'
                    }}>Skills</Typography>
                    <Grid container justifyContent="center">
                        {fullStack.length > 0 && (
                                <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center', background: '#555555', mt:{md:4, xs:4, sm:4}, pt:2, pb:2}}>
                                    <Typography variant="body1" className="no-first-letter"
                                                sx={{fontFamily: 'Nunito, sans-serif'}}>
                                        <Typography variant="h4" sx={{
                                            fontFamily: 'Nunito, sans-serif',
                                            textAlign: 'center'
                                        }}>Full stack web development</Typography>
                                        <ul style={{fontSize:20}}>
                                            {fullStack.map((f, index) => (
                                                <li key={index}>{f.name}</li>
                                            ))}
                                        </ul>
                                    </Typography>
                                </Grid>
                        )}
                        {frameworks.length > 0 && (
                            <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center', background: '#555555', mx:{xl:3, lg:3}, mt:{md:4, xs:4, sm:4}, pt:2, pb:2}}>
                                <Typography variant="body1" className="no-first-letter"
                                            sx={{fontFamily: 'Nunito, sans-serif'}}>
                                    <Typography variant="h4" sx={{
                                        fontFamily: 'Nunito, sans-serif',
                                        textAlign: 'center'
                                    }}>Frameworks</Typography>
                                    <ul style={{fontSize:20}}>
                                        {frameworks.map((f, index) => (
                                            <li key={index}>{f.name}</li>
                                        ))}
                                    </ul>
                                </Typography>
                            </Grid>
                        )}
                        {tools.length > 0 && (
                            <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center', background: '#555555', mt:{md:4, xs:4, sm:4}, pt:2, pb:2}}>
                                <Typography variant="body1" className="no-first-letter"
                                            sx={{fontFamily: 'Nunito, sans-serif'}}>
                                    <Typography variant="h4" sx={{
                                        fontFamily: 'Nunito, sans-serif',
                                        textAlign: 'center'
                                    }}>Tools</Typography>
                                    <ul style={{fontSize:20}}>
                                        {tools.map((t, index) => (
                                            <li key={index}>{t.name}</li>
                                        ))}
                                    </ul>
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                    {interests.length > 0 && (
                        <Box>
                            <Typography variant="h2" sx={{
                                fontFamily: 'Nunito, sans-serif',
                                marginTop: '2%',
                                marginBottom:'2%',
                                textAlign: 'center'
                            }}>Personal interests</Typography>
                            <Box sx={{background: '#555555', marginLeft:{lg: '11%', xl:'11%', md:'11%'}, marginRight: {lg: '11%', xl:'11%', md:'11%'}, mb:5, pb:2, pt:2}}>
                                <Typography variant="body1"
                                            sx={{
                                                fontFamily: 'Nunito, sans-serif',
                                                textAlign: 'center',
                                                fontSize: 20,
                                                marginX: '25%'
                                            }}><ConvertMdToJs className="md-url" mdFille={PersonalInterests}/></Typography>
                            </Box>

                        </Box>
                    )}
                </Grid>
            </Grid>
        </>
    );
}
