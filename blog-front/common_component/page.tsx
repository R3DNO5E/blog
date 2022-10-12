import React from "react";
import Head from "next/head";
import {Config} from "./config";

export class Page extends React.Component<{ title: string, content: React.ComponentType }, {}> {
    render() {
        const MainContent:React.ComponentType = this.props.content;
        return (
            <div>
                <Head>
                    <title>{this.props.title + " - " + Config.siteName}</title>
                </Head>
                <header>
                    <h1>{this.props.title}</h1>
                    <h2>{Config.siteName}</h2>
                </header>
                <main>
                    <MainContent/>
                </main>
                <footer>

                </footer>
            </div>
        );
    }
}