import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import {Box, Button} from "@mui/material";
import matter from "gray-matter";
import {Buffer} from 'buffer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

global.Buffer = Buffer;

export function ConvertMdToJs(props) {
    const {mdFilePath, className, display} = props;
    const [readable, setReadable] = useState({
        title: "",
        content: "",
        description: "",
        date: "",
    });

    useEffect(() => {
        fetch(mdFilePath)
            .then((res) => res.text())
            .then((md) => {
                const {data, content} = matter(md);
                const {title, description, date} = data;

                setReadable({
                    title: title || "",
                    content: content || "",
                    description: description || "",
                    date: date || "",
                });
            });
    }, [mdFilePath]);

    const components = {
        a: ({node, ...props}) => {
            if (props.href && props.href.startsWith("https://github.com/")) {
                return (
                    <Button {...props} target="_blank" rel="noopener noreferrer"
                            sx={{fontFamily: 'Nunito, sans-serif', color: 'white'}} size="large">{props.children}
                        <FontAwesomeIcon icon={faArrowRightLong}/></Button>);
            }
            return (
                <a {...props}>
                    {props.children}
                </a>
            );
        },
        p: ({node, ...props}) => (
            <p {...props} className="no-first-letter">
                {props.children}
            </p>
        ),
    };

    return (
        <Box>
            {display === "title" && (
                <div className={`title ${className}`}>{readable.title}</div>
            )}
            {display === "content" && (
                <Markdown
                    className={`content ${className}`}
                    children={readable.content}
                    components={components}
                />
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
