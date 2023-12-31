import {About} from "../components/About";

export function AboutPage(props) {
    const {fullStack, frameworks, tools, bio, interests} = props;
    return <>
        <About fullStack={fullStack} frameworks={frameworks} tools={tools} bio={bio} interests={interests}/>
    </>
}