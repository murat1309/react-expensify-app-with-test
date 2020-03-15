const path = require('path');
const express = require('express');
const app = express(); //create an express application
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); //we tell it to use the public directory to serve up all of our static assets

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html')) //if what the person requested isn't in the public folder just give them back index.html
});

app.listen(port, () => {        //start up on port 3000
    console.log('Server is up!')
});
