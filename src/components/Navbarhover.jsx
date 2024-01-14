import {motion} from "framer-motion";
import {useTheme} from "@mui/material";
import React from "react";

export function Navbarhover(props) {
    const {children} = props
    const theme = useTheme();
    return <>
    <motion.div whileHover={{
        textDecoration: 'underline',
        textDecorationColor: theme.palette.success.light,
        textDecorationThickness: '40%'
    }}>
        {children}
    </motion.div>
</>
}