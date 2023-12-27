import {Grid, Typography} from "@mui/material";

export function About() {
    return (
        <>
            <Grid container sx={{maxHeight: 'calc(100vh - 100px)', overflowY: 'auto'}}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: {xs: '8%', sm: '3%', lg: '3%'},
                        textAlign: 'center'
                    }}>About me</Typography>

                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: '2%',
                        textAlign: 'center'
                    }}>Biography</Typography>

                    <Typography variant="body1"
                                sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '25%'}}>
                        My name is Tibo Koninckx, I live in Mortsel. I completed a degree in programming at Thomas More
                        University of Applied Sciences in Sint Katelijne Waver (De Nayer campus). I became interested in
                        Web development when a secondary school teacher explained how to create a website with HTML and
                        CSS. That's how I became interested in web development.
                    </Typography>

                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: '2%',
                        textAlign: 'center'
                    }}>Skills</Typography>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center'}}>
                            <Typography variant="body1" className="no-first-letter"
                                        sx={{fontFamily: 'Nunito, sans-serif'}}>
                                <Typography variant="h4" sx={{
                                    fontFamily: 'Nunito, sans-serif',
                                    textAlign: 'center'
                                }}>Full stack web development</Typography>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript & React</li>
                                    <li>Java spring Boot</li>
                                    <li>Databanken: SQL (Postgres, Mysql) <br/> Nosql (MongoDb, Firbase)</li>
                                    <li>git, gitHub</li>
                                    <li>Test Driven</li>
                                    <li>Unit Testing</li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center'}}>
                            <Typography variant="body1" className="no-first-letter"
                                        sx={{fontFamily: 'Nunito, sans-serif'}}>
                                <Typography variant="h4" sx={{
                                    fontFamily: 'Nunito, sans-serif',
                                    textAlign: 'center'
                                }}>Frameworks</Typography>
                                <ul>
                                    <li>Material UI</li>
                                    <li>Ant Design</li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{textAlign: 'center'}}>
                            <Typography variant="body1" className="no-first-letter"
                                        sx={{fontFamily: 'Nunito, sans-serif'}}>
                                <Typography variant="h4" sx={{
                                    fontFamily: 'Nunito, sans-serif',
                                    textAlign: 'center'
                                }}>Tools</Typography>
                                <ul>
                                    <li>Intelij</li>
                                    <li>Visual studio</li>
                                    <li>Visual studio code</li>
                                    <li>Office</li>
                                </ul>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: '2%',
                        textAlign: 'center'
                    }}>Personal interests</Typography>
                    <Typography variant="body1"
                                sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '25%'}}>Every
                        Saturday morning I am an assistant at <a href="https://www.codefever.be/nl" target="_blank" style={{color: "white"}}>Codefever</a>. Codefever is an organization that teaches
                        children to program. As an assistant I have to assist the teacher and help children who have
                        problems.</Typography>
                </Grid>
            </Grid>
        </>
    );
}
