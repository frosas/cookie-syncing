var express = require('express');

express().
    use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }).
    use(express.static('public/site')).
    listen(8000);
    
express().
    use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }).
    use(express.static('public/id-site')).
    listen(8001);
