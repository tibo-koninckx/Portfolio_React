import {useEffect, useState} from "react";
import Markdown from "react-markdown";
import {Box} from "@mui/material";

export function ConvertMdToJs(props) {
    const {mdFille, className} =props
    let [readable, setReadable] = useState({ md: "" });

    useEffect(() => {
        fetch(mdFille)
            .then((res) => res.text())
            .then((md) => {
                setReadable({ md });
            });
    }, []);

    const components = {
        a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
                {props.children}
            </a>
        ),
    };

    return (
        <Box>
            <Markdown className={className} children={readable.md} components={components}/>
        </Box>
    );
}