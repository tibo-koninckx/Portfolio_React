import {Box, Typography} from "@mui/material";
import {motion} from "framer-motion"

export function Logo(props) {
    const {children, name} = props;

    return <Box style={{fontSize: '5em'}} sx={{px: 2}}>
        <motion.div whileHover={{scale: 0.8, backgroundColor: '#666666',}}>{children}</motion.div>
        <Typography variant="body1"
                    sx={{fontFamily: 'Nunito, sans-serif', textAlign: 'center', fontSize: 20}}
                    className="no-first-letter">{name}
        </Typography>
    </Box>
}