import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

export function Project(props) {
    const {projects} = props;
    return <>
        <Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                {projects.map((p, index) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        {p.image? <CardMedia
                            sx={{ height: 140 }}
                            image={p.image}
                            title={p.imageTitle}
                        />:''}
                        <CardContent>
                            <Typography sx={{fontFamily: 'Nunito, sans-serif'}} gutterBottom variant="h5" component="div">
                                {p.title}
                            </Typography>
                            <Typography sx={{fontFamily: 'Nunito, sans-serif'}} variant="body2" color="text.secondary">
                                {p.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={p.github} target="_blank">Learn More</Button>
                        </CardActions>
                    </Card>
                    ))}
            </Grid>
        </Grid>
    </>
}