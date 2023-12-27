import {About} from "../components/About";

export function AboutPage(props) {
    const {FullStack, Frameworks, Tools, Bio} = props;
    return <>
        <About FullStack={FullStack} Frameworks={Frameworks} Tools={Tools} Bio={Bio}/>
    </>
}