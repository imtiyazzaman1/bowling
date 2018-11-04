var Frame = require('./Frame.js')

function Game(frames = [new Frame, new Frame, new Frame, new Frame, new Frame,
  new Frame, new Frame, new Frame, new Frame, new Frame, ])
{
  this.frames = frames
  this.i = 0
  this.current_frame = this.frames[this.i]
}

Game.prototype.addRollToFrame = function (num) {
  var current_frame = this.frames[this.i]
  if (this.current_frame.isFinishedRolling()) {
    this.i++
    this.current_frame = this.frames[this.i]
  }
  this.current_frame.addRoll(num)
};

Game.prototype.calcScores = function () {
  for (var i = 0; i < this.frames.length; i++) {
    if (this.frames[i].rollTwo === undefined) {
      continue
    }
    this.frames[i].calculateScore()
  }
};

module.exports = Game
