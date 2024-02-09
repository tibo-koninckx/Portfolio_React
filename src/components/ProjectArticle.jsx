import {useLocation} from "react-router-dom";
import {ConvertMdToJs} from "../helpers/ConvertMdToJs";
import {Box, Grid} from "@mui/material";

export function ProjectArticle(props) {
    const location = useLocation();
    console.log(location.state);
    return <>
        <Grid container>
            <Grid item xs={12} sm={12} lg={12}>
                <Box sx={{
                    textAlign: 'center',
                    background: '#555555',
                    marginLeft: {lg: '11%', xl: '11%', md: '11%'},
                    marginRight: {lg: '11%', xl: '11%', md: '11%'},
                    pb: 2,
                    pt: 2,
                    mt: 5
                }}>
                    <ConvertMdToJs mdFilePath={location.state} display="content"/>
                </Box>
            </Grid>
        </Grid>
    </>
}