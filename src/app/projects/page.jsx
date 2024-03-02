'use client';
import {Project} from "../../components/Project";
import {PageAnimation} from "../../components/PageAnimation";

export default function ProjectsPage() {
    return <>
        <PageAnimation>
            <Project/>
        </PageAnimation>
    </>
}