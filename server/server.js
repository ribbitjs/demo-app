const express = require('express');
const app = new express();
const fs = require('fs');


const path = require('path')
const React = require('react')
const reactDomServer = require("react-dom/server");
const renderToString = reactDomServer.renderToString;

import { StaticRouter } from "react-router-dom";

import App from '../src/App';
//

app.use(express.static(path.resolve(__dirname, "../dist")));


app.get('/', (req, res) => {
    const context = {};
    const url = req.url
    const jsx = (
        <StaticRouter context={context} location={url}>
            <App />
        </StaticRouter>
    );
    const reactDom = renderToString(jsx);

    const html = htmlTemplate(reactDom);

    console.log('====')
    console.log(html)
    console.log('====')

    const file = url.replace(/\//g, 'x');

    fs.writeFile(`${file}.html`, html, (err) => {
        if (err) throw err;
        // res.writeHead( 200, { "Content-Type": "text/html" } );
        // res.end(`${file}.html`);
        res.sendFile(path.join(__dirname + `/../${file}.html`));

    })
});

app.get('/two', (req, res) => {
    const context = {};
    const url = req.url
    const jsx = (
        <StaticRouter context={context} location={url}>
            <App />
        </StaticRouter>
    );
    const reactDom = renderToString(jsx);

    const html = htmlTemplate(reactDom);

    console.log('====')
    console.log(html)
    console.log('====')

    const file = url.replace(/\//g, 'x');

    fs.writeFile(`${file}.html`, html, (err) => {
        if (err) throw err;
        // res.writeHead( 200, { "Content-Type": "text/html" } );
        // res.end(`${file}.html`);
        res.sendFile(path.join(__dirname + `/../${file}.html`));

    })
});



function htmlTemplate(reactDom) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom}</div>
            <script src="./dist/main.js"></script>
        </body>
        </html>
    `;
}

app.listen(4000)
console.log('listing on port 4000...');