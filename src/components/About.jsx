import {Box, Grid, Typography} from "@mui/material";
import {ConvertMdToJs} from "../helpers/ConvertMdToJs";
import Biography from "../content/about/Biography.md";
import PersonalInterests from "../content/about/Personal-interests.md"
import {Logo} from "./Logo";
import {FlexContainer} from "./FlexContainer";

export function About() {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box>
                            <Typography variant="h2" sx={{
                                fontFamily: 'Nunito, sans-serif',
                                marginTop: '2%',
                                textAlign: 'center'
                            }}><ConvertMdToJs mdFilePath={Biography} display="title" /></Typography>

                            <Box sx={{background: '#555555', marginLeft:{lg: '11%', xl:'11%', md:'11%'}, marginRight: {lg: '11%', xl:'11%', md:'11%'}, pb:2, pt:2, marginTop: '2%'}}>
                                <Typography variant="body1"
                                            sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '25%', fontSize: 20}}>
                                    <ConvertMdToJs mdFilePath={Biography} display="content" />
                                </Typography>
                            </Box>

                        </Box>

                    <Typography variant="h2" sx={{
                        fontFamily: 'Nunito, sans-serif',
                        marginTop: '2%',
                        textAlign: 'center'
                    }}>Skills</Typography>
                    <Grid container justifyContent="center">
                                <Grid item xs={12} sm={12} md={12} lg={3} sx={{textAlign: 'center', background: '#555555', mt:{md:4, xs:4, sm:4}, pt:2, pb:2}}>
                                    <Typography variant="body1" className="no-first-letter"
                                                sx={{fontFamily: 'Nunito, sans-serif'}}>
                                        <Typography variant="h4" sx={{
                                            fontFamily: 'Nunito, sans-serif',
                                            textAlign: 'center'
                                        }}>Full stack web development</Typography>
                                        <FlexContainer>
                                            <Logo name="HTML5">
                                                <i className="devicon-html5-plain"></i>
                                            </Logo>
                                            <Logo name="CSS3">
                                                <i className="devicon-css3-plain"></i>
                                            </Logo>
                                            <Logo name="Javascript">
                                                <i className="devicon-javascript-plain"></i>
                                            </Logo>
                                            <Logo name="React">
                                                <i className="devicon-react-original"></i>
                                            </Logo>
                                            <Logo name="Nextjs">
                                                <i className="devicon-nextjs-plain"></i>
                                            </Logo>
                                            <Logo name="Java">
                                                <i className="devicon-java-plain"></i>
                                            </Logo>
                                            <Logo name="Spring">
                                                <i className="devicon-spring-plain"></i>
                                            </Logo>
                                            <Logo name="Postgres">
                                                <i className="devicon-postgresql-plain"></i>
                                            </Logo>
                                            <Logo name="Mysql">
                                                <i className="devicon-mysql-plain"></i>
                                            </Logo>
                                            <Logo name="MongoDb">
                                                <i className="devicon-mongodb-plain"></i>
                                            </Logo>
                                            <Logo name="Firebase">
                                                <i className="devicon-firebase-plain"></i>
                                            </Logo>
                                            <Logo name="Git">
                                                <i className="devicon-git-plain"></i>
                                            </Logo>
                                            <Logo name="GitHub">
                                                <i className="devicon-github-original"></i>
                                            </Logo>
                                            <Logo name="Docker">
                                                <i class="devicon-docker-plain"></i>
                                            </Logo>
                                        </FlexContainer>
                                    </Typography>
                                </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3} sx={{
                                textAlign: 'center',
                                background: '#555555',
                                mx: {xl: 3, lg: 3},
                                mt: {md: 4, xs: 4, sm: 4},
                                pt: 2,
                                pb: 2
                            }}>
                                <Typography variant="body1" className="no-first-letter"
                                            sx={{fontFamily: 'Nunito, sans-serif'}}>
                                    <Typography variant="h4" sx={{
                                        fontFamily: 'Nunito, sans-serif',
                                        textAlign: 'center'
                                    }}>Frameworks</Typography>
                                    <FlexContainer>
                                        <Logo name="Material Ui">
                                            <i className="devicon-materialui-plain"></i>
                                        </Logo>
                                        <Logo name="Ant design">
                                            <i className="devicon-antdesign-plain"></i>
                                        </Logo>
                                    </FlexContainer>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={3} sx={{textAlign: 'center', background: '#555555', mt:{md:4, xs:4, sm:4}, pt:2, pb:2}}>
                                <Typography variant="body1" className="no-first-letter"
                                            sx={{fontFamily: 'Nunito, sans-serif'}}>
                                    <Typography variant="h4" sx={{
                                        fontFamily: 'Nunito, sans-serif',
                                        textAlign: 'center'
                                    }}>Tools</Typography>
                                    <FlexContainer>
                                        <Logo name="Intellij">
                                            <i className="devicon-intellij-plain"></i>
                                        </Logo>
                                        <Logo name="Visual studio">
                                            <i class="devicon-visualstudio-plain"></i>
                                        </Logo>
                                        <Logo name="Vscode">
                                            <i class="devicon-vscode-plain"></i>
                                        </Logo>
                                    </FlexContainer>
                                </Typography>
                            </Grid>
                    </Grid>
                        <Box>
                            <Typography variant="h2" sx={{
                                fontFamily: 'Nunito, sans-serif',
                                marginTop: '2%',
                                marginBottom:'2%',
                                textAlign: 'center'
                            }}><ConvertMdToJs mdFilePath={PersonalInterests} display="title" /></Typography>
                            <Box sx={{background: '#555555', marginLeft:{lg: '11%', xl:'11%', md:'11%'}, marginRight: {lg: '11%', xl:'11%', md:'11%'}, mb:5, pb:2, pt:2}}>
                                <Typography variant="body1"
                                            sx={{
                                                fontFamily: 'Nunito, sans-serif',
                                                textAlign: 'center',
                                                fontSize: 20,
                                                marginX: '25%'
                                            }}><ConvertMdToJs mdFilePath={PersonalInterests} className="md-url" display="content" /></Typography>
                            </Box>

                        </Box>
                </Grid>
            </Grid>
        </>
    );
}
