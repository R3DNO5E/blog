import React from "react";
import ReactMarkdown from "react-markdown";

export class Markdown extends React.Component<{ children: string }, {}> {
    render() {
        return <ReactMarkdown components={{
            h1: ({node, ...props}) => <h1 className="underline" {...props} />
        }}>{this.props.children}</ReactMarkdown>;
    }
}
