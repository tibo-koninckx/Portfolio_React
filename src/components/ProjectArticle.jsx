import {useLocation} from "react-router-dom";
import {ConvertMdToJs} from "../helpers/ConvertMdToJs";

export function ProjectArticle(props) {
    const location = useLocation();
    console.log(location.state);
    return <>
        <ConvertMdToJs mdFilePath={location.state} display="content"/>
    </>
}