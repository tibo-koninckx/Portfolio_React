import {Grid} from "@mui/material";
import {Card} from "./Card";
import {ConvertMdToJs} from "../helpers/ConvertMdToJs";
import {FlexContainer} from "./FlexContainer";
import matter from "gray-matter";

export function Project() {
    const context = require.context('../content/projects', false, /\.md$/);
    const markdownFiles = context.keys().map(context);
    const filleUrl = context.keys().map(p => p.replace(".md", '').toLowerCase());
    return (
        <>
            <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3}>
                <FlexContainer>
                    {markdownFiles.map((project, index) => {
                        return (
                            <Card key={index} title={<ConvertMdToJs mdFilePath={project} display="title" />} description={<ConvertMdToJs mdFilePath={project} display="description"/>} date={<ConvertMdToJs mdFilePath={project} display="date"/>} url={filleUrl[index]} />
                        );
                    })}
                </FlexContainer>
            </Grid>
        </>
    );
}