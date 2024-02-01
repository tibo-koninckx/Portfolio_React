import {Box, Typography} from "@mui/material";

export function Logo(props) {
    const {children, name} = props;

    return <Box style={{fontSize: '5em'}} sx={{px:2}}>
        {children}
        <Typography variant="body1"
                    sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', fontSize: 20}} className="no-first-letter">{name}
        </Typography>
    </Box>
}