import {Box, Button, Container, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom";

export function Card(props) {
    const {title, description, url, date, fillepath} = props;
    return <Box sx={{background: '#555555', mt:'5%', mx:'2%', pt:'1%', pb:'1%', maxWidth: '20%', minWidth: '20%'}}>
        <Container>
            <Typography sx={{fontFamily: 'Nunito, sans-serif', fontWeight: 'bold'}} gutterBottom variant="subtitle2" component="div">
                {date}
            </Typography>
            <Typography sx={{fontFamily: 'Nunito, sans-serif'}} gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography className="no-first-letter" sx={{fontFamily: 'Nunito, sans-serif'}} variant="body1" color="white">
                {description}
            </Typography>
            <Link to={`/projects/${url}`} state={fillepath}>
                <Button sx={{color: 'white'}} size="small" target="_blank">Read More <FontAwesomeIcon icon={faArrowRightLong} /></Button>
            </Link>
        </Container>
    </Box>
}