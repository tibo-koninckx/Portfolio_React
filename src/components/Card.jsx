import {Box, Button, Container, Typography} from "@mui/material";

export function Card(props) {
    const {title, description, url, buttonName} = props;
    return <Box sx={{background: '#555555'}}>
        <Container>
            <Typography sx={{fontFamily: 'Nunito, sans-serif'}} gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography sx={{fontFamily: 'Nunito, sans-serif'}} variant="body1" color="text.secondary">
                {description}
            </Typography>
            <Button size="small" href={url} target="_blank">{buttonName}</Button>
        </Container>
    </Box>
}