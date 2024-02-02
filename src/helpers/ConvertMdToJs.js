import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Box } from "@mui/material";
import {ExtractFrontmatter} from "./ExtractFrontmatter";

export function ConvertMdToJs(props) {
    const { mdFilePath, className, display } = props;
    const [readable, setReadable] = useState({ title: "", content: "" });

    useEffect(() => {
        fetch(mdFilePath)
            .then((res) => res.text())
            .then((md) => {
                const { title, content } = ExtractFrontmatter(md);
                setReadable({ title, content });
            });
    }, [mdFilePath]);

    const components = {
        a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
                {props.children}
            </a>
        ),
    };

    return (
        <Box>
            {display === "title" && (
                <div className={`title ${className}`}>{readable.title}</div>
            )}
            {display === "content" && (
                <Markdown className={`content ${className}`} children={readable.content} components={components} />
            )}
        </Box>
    );
}
