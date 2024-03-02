'use client';
import {Home} from "../components/Home";
import {PageAnimation} from "../components/PageAnimation";

export default function HomePage() {
    return <>
        <PageAnimation>
        <Home/>
        </PageAnimation>
    </>
}