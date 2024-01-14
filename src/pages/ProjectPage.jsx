import {Project} from "../components/Project";
import {PageAnimation} from "../components/PageAnimation";

export function ProjectPage(props) {
    const {projects} = props;
    return <>
        <PageAnimation>
            <Project projects={projects}/>
        </PageAnimation>
    </>
}