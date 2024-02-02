import {Box, Button, Container, Typography} from "@mui/material";

export function Card(props) {
    const {title, description, url} = props;
    return <Box sx={{background: '#555555', mt:'5%', mx:'2%', pt:'1%', pb:'1%', maxWidth: '20%'}}>
        <Container>
            <Typography sx={{fontFamily: 'Nunito, sans-serif'}} gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{fontFamily: 'Nunito, sans-serif'}} variant="body1" color="white">
                {description}
            </Typography>
            <Button size="small" href={url} target="_blank">Read More</Button>
        </Container>
    </Box>
}