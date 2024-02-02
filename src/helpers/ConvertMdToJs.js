import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Box } from "@mui/material";
import {ExtractFrontmatter} from "./ExtractFrontmatter";

export function ConvertMdToJs(props) {
    const { mdFilePath, className, display } = props;
    const [readable, setReadable] = useState({ title: "", content: "" , description: "", date: ""});

    useEffect(() => {
        fetch(mdFilePath)
            .then((res) => res.text())
            .then((md) => {
                const { title, content, description, date } = ExtractFrontmatter(md);
                setReadable({ title, content, description, date });
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
            {display === "description" && (
                <div className={`description ${className}`}>{readable.description}</div>
            )}
            {display === "date" && (
                <div className={`date ${className}`}>{readable.date}</div>
            )}
        </Box>
    );
}
