import React, { Component } from 'react';
import Document, {
    Main,
    NextScript,
    Head,
} from 'next/document'


class Template extends Document {
    render() {
        return(
            <html>
                <Head>
                    <title>Template</title>
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}

export default Template;