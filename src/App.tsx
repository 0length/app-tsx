import React, { useEffect, useState } from "react";

import AppHeader, { AppHeaderProps } from './container/AppHeader';
import AppBody from './container/AppBody';
import { any } from "prop-types";
// import logo from "./logo.svg";

// import "./App.css";

const headerProps: AppHeaderProps = {
    title: "myDrive Log",
    description: "Log, Track, Review your dive logs and relive the experience",
    links: [
        {
            label: "Logs",
            route: "/logs/list"
        },
        {
            label: "New Entry",
            route: "/logs/create"
        }
    ]
};

const bodyQuote = `
    this is my monero address if you wanna buy me a coffee 41zFbJCoh4EbjMfxo1LMVLc84h4dWRCoGFpmGC8hUb1M5RVtM7yv4CnFaqfqf54cxTBUaMz8jhKaeNcP1VmGvWxDEy9Csha 
    bernardus :D
`


const App:React.FC = () =>{

    const [title,setTitle] = useState('0length');

    useEffect(()=>{
        document.title = `Hellow ${title}`;
    }, [title])

    return (
        <main className="App">
            <AppHeader
                title={headerProps.title}
                description={headerProps.description}
                links={headerProps.links}
            />
            <AppBody header="Mydrive Log Dashboard" quote={bodyQuote}>
                <p>I'm a child element to the App Body and will be rendered in the AppBody</p>
            </AppBody>
        </main>
    )
}

export default App;