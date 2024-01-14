import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

export function Project(props) {
    const {projects} = props;
    return <>
        <Grid container>
                {projects.map((p, index) => (
                    <Grid container justifyContent="center" item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card sx={{maxWidth: 345, mt:5, mx:{sm:2, md:2, lg:2}}}>
                        {p.image? <CardMedia
                            sx={{ height: 140 }}
                            image={p.image}
                            title={p.imageTitle}
                        />:''}
                        <CardContent>
                            <Typography sx={{fontFamily: 'Nunito, sans-serif'}} gutterBottom variant="h5" component="div">
                                {p.title}
                            </Typography>
                            <Typography sx={{fontFamily: 'Nunito, sans-serif'}} variant="body1" color="text.secondary">
                                {p.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={p.github} target="_blank">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    ))}
        </Grid>
    </>
}