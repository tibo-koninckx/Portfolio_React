import {Navbar} from "../components/Navbar";

export const metadata = {
    title: "Portfolio Tibo Koninckx",
    description: "Portfolio",
}

export default function RootLayout({ children }) {
/*    tsParticles.load({
        id: "tsparticles",
        options: {
            preset: "triangles",
            background: {
                opacity: 0
            },
            particles: {
                move: {
                    speed: 2
                },
            },
            responsive: [
                {
                    options: {
                        particles: {
                            number: {
                                value: 50
                            },
                        },
                    },
                    maxWidth: 800
                },
            ]
        },
    });*/
    return <>
        <html lang="en">
        <head>
            <link href="https://fonts.googleapis.com" rel="preconnect"/>
            <link crossOrigin href="https://fonts.gstatic.com" rel="preconnect"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" rel="stylesheet"
                  type='text/css'/>
            <meta content="#000000" name="theme-color"/>
        </head>
        <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"><Navbar/> {children}</div>
        <script
            src="https://cdn.jsdelivr.net/npm/@tsparticles/preset-triangles@3/tsparticles.preset.triangles.bundle.min.js"></script>
        </body>
        </html>

    </>
}