"use client"
import {motion} from "framer-motion"

export function PageAnimation(props) {
    const {children} = props;
    return <>
        <motion.div animate={{height: "auto", x: 0, width: "100%", transition: {duration: 2}}}
                    initial={{height: 0, x: '-100%', width: "100%"}}
                    exit={{y: '100vh', transition: {duration: 2}}}
                    style={{overflow: "hidden", position: 'relative'}}>
            {children}
        </motion.div>
    </>
}