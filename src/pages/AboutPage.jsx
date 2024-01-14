import {About} from "../components/About";
import {PageAnimation} from "../components/PageAnimation";

export function AboutPage(props) {
    const {fullStack, frameworks, tools, bio, interests} = props;
    return <>
        <PageAnimation>
            <About fullStack={fullStack} frameworks={frameworks} tools={tools} bio={bio} interests={interests}/>
        </PageAnimation>
    </>
}