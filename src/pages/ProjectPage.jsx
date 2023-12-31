import {Project} from "../components/Project";

export function ProjectPage(props) {
    const {projects} = props;
    return <>
        <Project projects={projects}/>
    </>
}