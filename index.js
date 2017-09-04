const express = require('express');
const app = express();
const path = require('path');
const scrapperController = require('./controllers/scrappers');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/test', function (req, res) {
    console.log('test');
    scrapperController.scrape1().then(page => {
        res.json(page);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});