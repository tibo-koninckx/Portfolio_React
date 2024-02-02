import {Grid} from "@mui/material";
import {Card} from "./Card";
import {Buffer} from 'buffer';
import {ConvertMdToJs} from "../helpers/ConvertMdToJs";
import {FlexContainer} from "./FlexContainer";

global.Buffer = Buffer;


export function Project() {
    const context = require.context('../content/projects', false, /\.md$/);
    const markdownFiles = context.keys().map(context);
    return (
        <>
            <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3}>
                <FlexContainer>
                    {markdownFiles.map((project, index) => (
                        <Card key={index} title={<ConvertMdToJs mdFilePath={project} display="title"/>}/>
                    ))}
                </FlexContainer>
            </Grid>
        </>
    );
}