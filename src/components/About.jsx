import {Grid, Typography} from "@mui/material";

export function About(props) {
    const {FullStack, Frameworks, Tools, Bio} = props;
    return (
        <>
        <Grid container sx={{maxHeight: 'calc(100vh - 100px)', overflowY: 'auto'}}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h2" sx={{
                    fontFamily: 'Nunito, sans-serif',
                    marginTop: {xs: '8%', sm: '3%', lg: '3%'},
                    textAlign: 'center'
                }}>About me</Typography>

                {Bio.length > 0 && (
                    <div>
                        <Typography variant="h2" sx={{
                            fontFamily: 'Nunito, sans-serif',
                            marginTop: '2%',
                            textAlign: 'center'
                        }}>Biography</Typography>

                        <Typography variant="body1"
                                    sx={{ fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '25%' }}>
                            {Bio.map((b, index) => (
                                <span key={index}>{b}</span>
                            ))}
                        </Typography>
                    </div>
                )}

            <Typography variant="h2" sx={{
                fontFamily: 'Nunito, sans-serif',
                marginTop: '2%',
                textAlign: 'center'
            }}>Skills</Typography>
            <Grid container justifyContent="center">
                {FullStack.length > 0 && (
                    <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center'}}>
                        <Typography variant="body1" className="no-first-letter"
                                    sx={{fontFamily: 'Nunito, sans-serif'}}>
                            <Typography variant="h4" sx={{
                                fontFamily: 'Nunito, sans-serif',
                                textAlign: 'center'
                            }}>{!FullStack.length > 0 ? '' : 'Full stack web development'}</Typography>
                            <ul>
                                {FullStack.map((f, index) => (
                                    <li key={index}>{f.name}</li>
                                ))}
                            </ul>
                        </Typography>
                    </Grid>
                )}
                {Frameworks.length > 0 && (
                    <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center'}}>
                        <Typography variant="body1" className="no-first-letter"
                                    sx={{fontFamily: 'Nunito, sans-serif'}}>
                            <Typography variant="h4" sx={{
                                fontFamily: 'Nunito, sans-serif',
                                textAlign: 'center'
                            }}>Frameworks</Typography>
                            <ul>
                                {Frameworks.map((f, index) => (
                                    <li key={index}>{f.name}</li>
                                ))}
                            </ul>
                        </Typography>
                    </Grid>
                )}
                {Tools.length > 0 && (
                    <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center'}}>
                        <Typography variant="body1" className="no-first-letter"
                                    sx={{fontFamily: 'Nunito, sans-serif'}}>
                            <Typography variant="h4" sx={{
                                fontFamily: 'Nunito, sans-serif',
                                textAlign: 'center'
                            }}>{!Tools.length > 0 ? '' : 'Tools'}</Typography>
                            <ul>
                                {Tools.map((t, index) => (
                                    <li key={index}>{t.name}</li>
                                ))}
                            </ul>
                        </Typography>
                    </Grid>
                )}
            </Grid>
            <Typography variant="h2" sx={{
                fontFamily: 'Nunito, sans-serif',
                marginTop: '2%',
                textAlign: 'center'
            }}>Personal interests</Typography>
            <Typography variant="body1"
                        sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '25%'}}>Every
                Saturday morning I am an assistant at <a href="https://www.codefever.be/nl" target="_blank"
                                                         style={{color: "white"}}>Codefever</a>. Codefever is an
                organization that teaches
                children to program. As an assistant I have to assist the teacher and help children who have
                problems.</Typography>
        </Grid>
        </Grid>
</>
)
    ;
}
