import {Grid, Typography} from "@mui/material";

export function About() {
    return <>
        <Grid sx={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto'}}>
            <Grid xs={12} sm={10} md={12} lg={12}>
                <Typography variant="h2" sx={{fontFamily: 'Nunito, sans-serif', marginTop: {xs:'8%',sm:'3%', lg:'3%'}, textAlign: 'center'}}>About
                    me</Typography>
                <Typography variant="subtitle1"
                            sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '15%'}}>Welcome to my
                    professional portfolio.
                    I am Tibo Koninckx, a graduate Programming student at Thomas More University of Applied Sciences -
                    De Nayer.
                    In my training I am trained as a Full Stack Developer.
                    Currently my focus is on refining my skills to create web applications.</Typography>
                <Typography variant="h2" sx={{fontFamily: 'Nunito, sans-serif', mt: 2, textAlign: 'center', mx:2}}>Professional
                    Growth
                </Typography>
                <Typography variant="subtitle1"
                            sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '15%'}}>The fascination
                    with code in the world of programming is the fascination with the realization of solutions.
                    During my training I am trained to become a Full Stack Developer, which gives me a lot of expertise
                    in the field of web development and web applications.
                    Solving complex problems and developing UI is my path to becoming a Full Stack
                    Developer.</Typography>
                <Typography variant="h2" sx={{fontFamily: 'Nunito, sans-serif', mt: 2, textAlign: 'center', mx:2}}>Interest in
                    Innovation</Typography>
                <Typography variant="subtitle1"
                            sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '15%'}}>My professional
                    I like to follow the latest developments in the field. This encourages me to continuously grow. I am
                    always enthusiastic about acquiring new skills and applying new tools and frameworks.</Typography>
                <Typography variant="h2" sx={{fontFamily: 'Nunito, sans-serif', mt: 2, textAlign: 'center', mx:2}}>Collaborate
                    for Success</Typography>
                <Typography variant="subtitle1"
                            sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', marginX: '15%'}}>I am always
                    looking for new challenges to expand my knowledge and broaden my horizons.
                    If you need Full stack developer. Please do not hesitate to contact me.</Typography>
            </Grid>
        </Grid>
    </>
}