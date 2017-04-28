'use strict'

var EventEmitter = require('events');
var resultLog =[];

function writeToLog(data) {
  resultLog.push(data);
  console.log(data);
}

module.exports = class player extends EventEmitter {
  constructor(name, sportType='basketBall', points=10) {
    super();
    this.name = name;
    this.sportType = sportType;
    this.points = points;
  }
  addPoints(amount) {
    this.points += amount;
    this.emit('pointsChanged');
  }
  descPoints(amount) {
    this.points -= amount;
    this.emit('pointsChanged');
  }
  displayPlayer() {
    writeToLog(`${this.name} from ${this.sportType} has ${this.points} points`);
  }
  checkAboveZero() {
    if(this.points < 0) {
      writeToLog(`Under 0 Warning!!! ${this.name} from ${this.sportType} has ${this.points} points`);
    }
  }
  checkGoal(bbplayer, goal) {
    if(bbplayer.points > goal) {
      writeToLog(`Goal Achieved!!! ${bbplayer.name} - ${this.sportType}: ${this.points} points`);
    }
  }
  getLog() {
    return resultLog;
  }
}

