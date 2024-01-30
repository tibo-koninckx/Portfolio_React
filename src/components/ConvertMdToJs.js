import {useEffect, useState} from "react";
import Markdown from "react-markdown";
import {Box} from "@mui/material";

export function ConvertToMarkdown(props) {
    const {mdFille} =props
    let [readable, setReadable] = useState({ md: "" });

    useEffect(() => {
        fetch(mdFille)
            .then((res) => res.text())
            .then((md) => {
                setReadable({ md });
            });
    }, []);

    return (
        <Box>
            <Markdown children={readable.md} />
        </Box>
    );
}