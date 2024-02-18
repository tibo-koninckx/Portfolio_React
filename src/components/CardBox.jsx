import {Box} from "@mui/material";

export function CardBox(props) {
    const {children, style} = props;
    return <>
        <Box style={style} sx={{
            background: '#555555',
            marginLeft: {lg: '11%', xl: '11%', md: '11%'},
            marginRight: {lg: '11%', xl: '11%', md: '11%'},
            pb: 2,
            pt: 2
        }}>
            {children}
        </Box>
    </>
}