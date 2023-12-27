import {About} from "../components/About";
import {Interests} from "../data/data";

export function AboutPage(props) {
    const {FullStack, Frameworks, Tools, Bio, Interests} = props;
    return <>
        <About FullStack={FullStack} Frameworks={Frameworks} Tools={Tools} Bio={Bio} Interests={Interests}/>
    </>
}