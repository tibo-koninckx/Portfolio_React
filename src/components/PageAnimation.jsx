import {motion} from "framer-motion"

export function PageAnimation(props) {
    const {children} = props;
    return<>
        <motion.div  animate={{ height: "auto", y:0, transition: { duration: 3 } }}
                     initial={{ height: 0, y:'100%'}}
                     style={{ overflow: "hidden", position: 'relative'}}>
            {children}
        </motion.div>
    </>
}