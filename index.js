var express = require('express');

express().use(express.static('public/site')).listen(8000);
express().use(express.static('public/id-site')).listen(8001);
