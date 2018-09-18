const express = require('express');
const {
    Nuxt,
    Builder
} = require('nuxt');
const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);

// TODO: Extend this service to include a CRM API for managing the retrieval of data. I want this agnostic layer for two reasons. One being security. This way the only place that has control of the API key is the server. The client will have to go through my API in order to make this happen.

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function startServer() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    // Build only in dev mode
    if(config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Listen the server
    app.listen(port, host);
    console.log('Server listening on http://' + host + ':' + port); // eslint-disable-line no-console
}
startServer();
