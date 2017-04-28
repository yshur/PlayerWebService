'use strict'

var http = require('http'), 
    express = require('express'),
    querystring = require('querystring'),
    EventEmitter = require('events'),
    eventsConfig = require('./config').events,
    Player = require('./player');

var app = express(),
    Yair = new Player('Yair', 'futball', 10);

Yair.on(eventsConfig.POINTSCHANGED, Yair.displayPlayer);
Yair.on(eventsConfig.POINTSCHANGED, Yair.checkAboveZero);
Yair.on(eventsConfig.POINTSCHANGED, function() {
  Yair.checkGoal(this, 80);
});

Yair.addPoints(20);
Yair.addPoints(30);
Yair.addPoints(60);
Yair.descPoints(120);
Yair.descPoints(120);

app.get('/',function(req,res) {
  res.send('hello world\n'+Yair.getLog());
});
http.createServer(app).listen(8080);
console.log('listening on port 8080');
