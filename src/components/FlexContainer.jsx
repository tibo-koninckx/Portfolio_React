"use client";
import {Box} from "@mui/material";

export function FlexContainer(props) {
    const {children} = props;
    return <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
        {children}
    </Box>
}