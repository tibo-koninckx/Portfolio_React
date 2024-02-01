import {Box} from "@mui/material";

export function LogoFlexContainer(props) {
    const {children} = props;
    return <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
        {children}
    </Box>
}